<?php

namespace SilverStripe\Filesystem\Flysystem;

use Config;
use Injector;
use Session;
use Flushable;
use InvalidArgumentException;
use League\Flysystem\Exception;
use League\Flysystem\Filesystem;
use League\Flysystem\Util;
use SilverStripe\Filesystem\Storage\AssetNameGenerator;
use SilverStripe\Filesystem\Storage\AssetStore;
use SilverStripe\Filesystem\Storage\AssetStoreRouter;
use SS_HTTPResponse;
use SS_HTTPResponse_Exception;

/**
 * Asset store based on flysystem Filesystem as a backend
 *
 * @package framework
 * @subpackage filesystem
 */
class FlysystemAssetStore implements AssetStore, AssetStoreRouter, Flushable {

	/**
	 * @var Filesystem
	 */
	private $publicFilesystem = null;

	/**
	 * Filesystem to use for protected files
	 *
	 * @var Filesystem
	 */
	private $protectedFilesystem = null;

	/**
	 * Enable to use legacy filename behaviour (omits hash)
	 *
	 * Note that if using legacy filenames then duplicate files will not work.
	 *
	 * @config
	 * @var bool
	 */
	private static $legacy_filenames = false;

	/**
	 * Assign new flysystem backend
	 *
	 * @param Filesystem $filesystem
	 * @return $this
	 */
	public function setPublicFilesystem(Filesystem $filesystem) {
		$this->publicFilesystem = $filesystem;
		return $this;
	}

	/**
	 * Get the currently assigned flysystem backend
	 *
	 * @return Filesystem
	 */
	public function getPublicFilesystem() {
		return $this->publicFilesystem;
	}

	/**
	 * Assign filesystem to use for non-public files
	 *
	 * @param Filesystem $filesystem
	 * @return $this
	 */
	public function setProtectedFilesystem(Filesystem $filesystem) {
		$this->protectedFilesystem = $filesystem;
		return $this;
	}

	/**
	 * Get filesystem to use for non-public files
	 *
	 * @return Filesystem
	 */
	public function getProtectedFilesystem() {
		return $this->protectedFilesystem;
	}

	/**
	 * Return the store that contains the given fileID
	 *
	 * @param string $fileID Internal file identifier
	 * @return Filesystem
	 */
	protected function getFilesystemFor($fileID) {
		if($this->getPublicFilesystem()->has($fileID)) {
			return $this->getPublicFilesystem();
		}

		if($this->getProtectedFilesystem()->has($fileID)) {
			return $this->getProtectedFilesystem();
		}

		return null;
	}

	public function getVisibility($filename, $hash) {
		$fileID = $this->getFileID($filename, $hash);
		if($this->getPublicFilesystem()->has($fileID)) {
			return self::VISIBILITY_PUBLIC;
		}

		if($this->getProtectedFilesystem()->has($fileID)) {
			return self::VISIBILITY_PROTECTED;
		}

		return null;
	}


	public function getAsStream($filename, $hash, $variant = null) {
		$fileID = $this->getFileID($filename, $hash, $variant);
		return $this
			->getFilesystemFor($fileID)
			->readStream($fileID);
	}

	public function getAsString($filename, $hash, $variant = null) {
		$fileID = $this->getFileID($filename, $hash, $variant);
		return $this
			->getFilesystemFor($fileID)
			->read($fileID);
	}

	public function getAsURL($filename, $hash, $variant = null, $grant = true) {
		if($grant) {
			$this->grant($filename, $hash);
		}
		$fileID = $this->getFileID($filename, $hash, $variant);
		return $this
			->getFilesystemFor($fileID)
			->getPublicUrl($fileID);
	}

	public function setFromLocalFile($path, $filename = null, $hash = null, $variant = null, $config = array()) {
		// Validate this file exists
		if(!file_exists($path)) {
			throw new InvalidArgumentException("$path does not exist");
		}

		// Get filename to save to
		if(empty($filename)) {
			$filename = basename($path);
		}

		// Callback for saving content
		$callback = function(Filesystem $filesystem, $fileID) use ($path) {
			// Read contents as string into flysystem
			$handle = fopen($path, 'r');
			if($handle === false) {
				throw new InvalidArgumentException("$path could not be opened for reading");
			}
			$result = $filesystem->putStream($fileID, $handle);
			fclose($handle);
			return $result;
		};

		// When saving original filename, generate hash
		if(!$variant) {
			$hash = sha1_file($path);
		}

		// Submit to conflict check
		return $this->writeWithCallback($callback, $filename, $hash, $variant, $config);
	}

	public function setFromString($data, $filename, $hash = null, $variant = null, $config = array()) {
		// Callback for saving content
		$callback = function(Filesystem $filesystem, $fileID) use ($data) {
			return $filesystem->put($fileID, $data);
		};

		// When saving original filename, generate hash
		if(!$variant) {
			$hash = sha1($data);
		}

		// Submit to conflict check
		return $this->writeWithCallback($callback, $filename, $hash, $variant, $config);
	}

	public function setFromStream($stream, $filename, $hash = null, $variant = null, $config = array()) {
		// If the stream isn't rewindable, write to a temporary filename
		if(!$this->isSeekableStream($stream)) {
			$path = $this->getStreamAsFile($stream);
			$result = $this->setFromLocalFile($path, $filename, $hash, $variant, $config);
			unlink($path);
			return $result;
		}

		// Callback for saving content
		$callback = function(Filesystem $filesystem, $fileID) use ($stream) {
			return $filesystem->putStream($fileID, $stream);
		};

		// When saving original filename, generate hash
		if(!$variant) {
			$hash = $this->getStreamSHA1($stream);
		}

		// Submit to conflict check
		return $this->writeWithCallback($callback, $filename, $hash, $variant, $config);
	}

	public function delete($filename, $hash) {
		// TODO: Implement delete() method.
	}

	public function publish($filename, $hash) {
		// TODO: Implement publish() method.
	}

	public function protect($filename, $hash) {
		// TODO: Implement protect() method.
	}

	public function grant($filename, $hash) {
		$fileID = $this->getFileID($filename, $hash);
		$granted = Session::get('AssetStore_Grants') ?: array();
		$granted[$fileID] = true;
		Session::set('AssetStore_Grants', $granted);
	}

	/**
	 * get sha1 hash from stream
	 *
	 * @param resource $stream
	 * @return string str1 hash
	 */
	protected function getStreamSHA1($stream) {
		Util::rewindStream($stream);
		$context = hash_init('sha1');
		hash_update_stream($context, $stream);
		return hash_final($context);
	}

	/**
	 * Get stream as a file
	 *
	 * @param resource $stream
	 * @return string Filename of resulting stream content
	 */
	protected function getStreamAsFile($stream) {
		// Get temporary file and name
		$file = tempnam(sys_get_temp_dir(), 'ssflysystem');
		$buffer = fopen($file, 'w');
        if (!$buffer) {
            throw new Exception("Could not create temporary file");
        }

		// Transfer from given stream
		Util::rewindStream($stream);
        stream_copy_to_stream($stream, $buffer);
        if (! fclose($buffer)) {
            throw new Exception("Could not write stream to temporary file");
        }

		return $file;
	}

	/**
	 * Determine if this stream is seekable
	 *
	 * @param resource $stream
	 * @return bool True if this stream is seekable
	 */
	protected function isSeekableStream($stream) {
		return Util::isSeekableStream($stream);
	}

	/**
	 * Invokes the conflict resolution scheme on the given content, and invokes a callback if
	 * the storage request is approved.
	 *
	 * @param callable $callback Will be invoked and passed a fileID if the file should be stored
	 * @param string $filename Name for the resulting file
	 * @param string $hash SHA1 of the original file content
	 * @param string $variant Variant to write
	 * @param array $config Write options. {@see AssetStore}
	 * @return array Tuple associative array (Filename, Hash, Variant)
	 * @throws Exception
	 */
	protected function writeWithCallback($callback, $filename, $hash, $variant = null, $config = array()) {
		// Set default conflict resolution
		if(empty($config['conflict'])) {
			$conflictResolution = $this->getDefaultConflictResolution($variant);
		} else {
			$conflictResolution = $config['conflict'];
		}
		
		// Validate parameters
		if($variant && $conflictResolution === AssetStore::CONFLICT_RENAME) {
			// As variants must follow predictable naming rules, they should not be dynamically renamed
			throw new InvalidArgumentException("Rename cannot be used when writing variants");
		}
		if(!$filename) {
			throw new InvalidArgumentException("Filename is missing");
		}
		if(!$hash) {
			throw new InvalidArgumentException("File hash is missing");
		}

		$filename = $this->cleanFilename($filename);
		$fileID = $this->getFileID($filename, $hash, $variant);

		// Check conflict resolution scheme
		$resolvedID = $this->resolveConflicts($conflictResolution, $fileID);
		if($resolvedID !== false) {
			// Check if source file already exists on the filesystem
			$mainID = $this->getFileID($filename, $hash);
			$filesystem = $this->getFilesystemFor($mainID);

			// If writing a new file use the correct visibility
			if(!$filesystem) {
				// Default to public store unless requesting protected store
				if(isset($config['visibility']) && $config['visibility'] === self::VISIBILITY_PROTECTED) {
					$filesystem = $this->getProtectedFilesystem();
				} else {
					$filesystem = $this->getPublicFilesystem();
				}
			}

			// Submit and validate result
			$result = $callback($filesystem, $resolvedID);
			if(!$result) {
				throw new Exception("Could not save {$filename}");
			}

			// in case conflict resolution renamed the file, return the renamed
			$filename = $this->getOriginalFilename($resolvedID);
			
		} elseif(empty($variant)) {
			// If deferring to the existing file, return the sha of the existing file,
			// unless we are writing a variant (which has the same hash value as its original file)
			$stream = $this
				->getFilesystemFor($fileID)
				->readStream($fileID);
			$hash = $this->getStreamSHA1($stream);
		}

		return array(
			'Filename' => $filename,
			'Hash' => $hash,
			'Variant' => $variant
		);
	}

	/**
	 * Choose a default conflict resolution
	 *
	 * @param string $variant
	 * @return string
	 */
	protected function getDefaultConflictResolution($variant) {
		// If using new naming scheme (segment by hash) it's normally safe to overwrite files.
		// Variants are also normally safe to overwrite, since lazy-generation is implemented at a higher level.
		$legacy = $this->useLegacyFilenames();
		if(!$legacy || $variant) {
			return AssetStore::CONFLICT_OVERWRITE;
		}
		
		// Legacy behaviour is to rename
		return AssetStore::CONFLICT_RENAME;
	}

	/**
	 * Determine if legacy filenames should be used. These do not have hash path parts.
	 *
	 * @return bool
	 */
	protected function useLegacyFilenames() {
		return Config::inst()->get(get_class($this), 'legacy_filenames');
	}

	public function getMetadata($filename, $hash, $variant = null) {
		$fileID = $this->getFileID($filename, $hash, $variant);
		$filesystem = $this->getFilesystemFor($fileID);
		if($filesystem) {
			return $filesystem->getMetadata($fileID);
		}
	}

	public function getMimeType($filename, $hash, $variant = null) {
		$fileID = $this->getFileID($filename, $hash, $variant);
		$filesystem = $this->getFilesystemFor($fileID);
		if($filesystem) {
			return $filesystem->getMimetype($fileID);
		}
	}

	public function exists($filename, $hash, $variant = null) {
		$fileID = $this->getFileID($filename, $hash, $variant);
		$filesystem = $this->getFilesystemFor($fileID);
		return !empty($filesystem);
	}

	/**
	 * Determine the path that should be written to, given the conflict resolution scheme
	 * 
	 * @param string $conflictResolution
	 * @param string $fileID
	 * @return string|false Safe filename to write to. If false, then don't write, and use existing file.
	 * @throws Exception
	 */
	protected function resolveConflicts($conflictResolution, $fileID) {
		// If overwrite is requested, simply put
		if($conflictResolution === AssetStore::CONFLICT_OVERWRITE) {
			return $fileID;
		}

		// Otherwise, check if this exists
		$exists = $this->getFilesystemFor($fileID);
		if(!$exists) {
			return $fileID;
		}

		// Flysystem defaults to use_existing
		switch($conflictResolution) {
			// Throw tantrum
			case static::CONFLICT_EXCEPTION: {
				throw new \InvalidArgumentException("File already exists at path {$fileID}");
			}

			// Rename
			case static::CONFLICT_RENAME: {
				foreach($this->fileGeneratorFor($fileID) as $candidate) {
					if(!$this->getFilesystemFor($candidate)) {
						return $candidate;
					}
				}

				throw new \InvalidArgumentException("File could not be renamed with path {$fileID}");
			}

			// Use existing file
			case static::CONFLICT_USE_EXISTING:
			default: {
				return false;
			}
		}
	}

	/**
	 * Get an asset renamer for the given filename.
	 *
	 * @param string $fileID Adaptor specific identifier for this file/version
	 * @return AssetNameGenerator
	 */
	protected function fileGeneratorFor($fileID){
		return Injector::inst()->createWithArgs('AssetNameGenerator', array($fileID));
	}

	/**
	 * Performs filename cleanup before sending it back.
	 *
	 * This name should not contain hash or variants.
	 *
	 * @param string $filename
	 * @return string
	 */
	protected function cleanFilename($filename) {
		// Since we use double underscore to delimit variants, eradicate them from filename
		return preg_replace('/_{2,}/', '_', $filename);
	}

	/**
	 * Given a FileID, map this back to the original filename, trimming variant
	 *
	 * @param string $fileID Adaptor specific identifier for this file/version
	 * @param string $variant Out parameter for any found variant
	 * @return string
	 */
	protected function getOriginalFilename($fileID, &$variant = '') {
		// Remove variant
		$original = $fileID;
		$variant = '';
		if(preg_match('/^(?<before>((?<!__).)+)__(?<variant>[^\\.]+)(?<after>.*)$/', $fileID, $matches)) {
			$original = $matches['before'].$matches['after'];
			$variant = $matches['variant'];
		}

		// Remove hash (unless using legacy filenames, without hash)
		if($this->useLegacyFilenames()) {
			return $original;
		} else {
			return preg_replace(
				'/(?<hash>[a-zA-Z0-9]{10}\\/)(?<name>[^\\/]+)$/',
				'$2',
				$original
			);
		}
	}

	/**
	 * Map file tuple (hash, name, variant) to a filename to be used by flysystem
	 *
	 * The resulting file will look something like my/directory/EA775CB4D4/filename__variant.jpg
	 *
	 * @param string $filename Name of file
	 * @param string $hash Hash of original file
	 * @param string $variant (if given)
	 * @return string Adaptor specific identifier for this file/version
	 */
	protected function getFileID($filename, $hash, $variant = null) {
		// Since we use double underscore to delimit variants, eradicate them from filename
		$filename = $this->cleanFilename($filename);
		$name = basename($filename);

		// Split extension
		$extension = null;
		if(($pos = strpos($name, '.')) !== false) {
			$extension = substr($name, $pos);
			$name = substr($name, 0, $pos);
		}

		// Unless in legacy mode, inject hash just prior to the filename
		if(Config::inst()->get(__CLASS__, 'legacy_filenames')) {
			$fileID = $name;
		} else {
			$fileID = substr($hash, 0, 10) . '/' . $name;
		}

		// Add directory
		$dirname = ltrim(dirname($filename), '.');
		if($dirname) {
			$fileID = $dirname . '/' . $fileID;
		}

		// Add variant
		if($variant) {
			$fileID .= '__' . $variant;
		}

		// Add extension
		if($extension) {
			$fileID .= $extension;
		}

		return $fileID;
	}

	/**
	 * Ensure each adaptor re-generates its own server configuration files
	 */
	public static function flush() {
		// Ensure that this instance is constructed on flush, thus forcing
		// bootstrapping of necessary .htaccess / web.config files
		$instance = singleton('AssetStore');
		if ($instance instanceof FlysystemAssetStore) {
			$filesystems = array(
				$instance->getPublicFilesystem(),
				$instance->getProtectedFilesystem()
			);
			foreach($filesystems as $filesystem) {
				$store = $filesystem->getAdapter();
				if($store instanceof AssetAdapter) {
					$store->flush();
				}
			}
		}
	}

	public function getResponseFor($asset) {
		\Debug::dump($asset);
		die;
	}
}
