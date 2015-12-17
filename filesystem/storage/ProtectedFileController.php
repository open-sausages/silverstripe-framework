<?php

namespace SilverStripe\Filesystem\Storage;

/**
 * Provides routing for session-whitelisted protected files
 *
 * Class ProtectedFileController
 * @package SilverStripe\Filesystem\Storage
 */
class ProtectedFileController extends \Controller {

	/**
	 * Designated router
	 *
	 * @var AssetStoreRouter
	 */
	protected $handler = null;

	/**
	 * @return AssetStoreRouter
	 */
	public function getRouteHandler() {
		return $this->handler;
	}

	/**
	 * @param AssetStoreRouter $handler
	 * @return $this
	 */
	public function setRouteHandler(AssetStoreRouter $handler) {
		$this->handler = $handler;
		return $this;
	}

	private static $url_handlers = array(
		'$Filename' => "handleFile"
	);

	private static $allowed_actions = array(
		'handleFile'
	);

	/**
	 * Provide a response for the given file request
	 *
	 * @param \SS_HTTPRequest $request
	 * @return \SS_HTTPResponse
	 */
	public function handleFile(\SS_HTTPRequest $request) {
		$filename = $this->parseFilename($request);

		// Deny requests to private file
		if(!$this->isValidFilename($filename)) {
			return $this->httpError(400, "Invalid request");
		}

		// Pass through to backend
		return $this->getRouteHandler()->getResponseFor($filename);
	}

	/**
	 * Check if the given filename is safe to pass to the route handler.
	 * This should block direct requests to assets/.protected/ paths
	 *
	 * @param $filename
	 * @return bool True if the filename is allowed
	 */
	public function isValidFilename($filename) {
		// Block hidden files
		return !preg_match('#(^|[\\\\/])\\..*#', $filename);
	}

	/**
	 * Get the file component from the request
	 *
	 * @param \SS_HTTPRequest $request
	 * @return string
	 */
	protected function parseFilename(\SS_HTTPRequest $request) {
		$filename = '';
		$next = $request->param('Filename');
		while($next) {
			$filename = $filename ? \File::join_paths($filename, $next) : $next;
			$next = $request->shift();
		}
		if($extension = $request->getExtension()) {
			$filename = $filename . "." . $extension;
		}
		return $filename;
	}
}
