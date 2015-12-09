<?php

namespace SilverStripe\Filesystem\Flysystem;

use Controller;
use Director;
use League\Flysystem\Adapter\Local;

/**
 * Adaptor for local filesystem based on assets directory
 *
 * @package framework
 * @subpackage filesystem
 */
class AssetAdapter extends Local implements URLAdapter {

	/**
	 * Config compatible permissions configuration
	 *
	 * @config
	 * @var array
	 */
	private static $file_permissions = array(
		'file' => [
            'public' => 0744,
            'private' => 0700,
        ],
        'dir' => [
            'public' => 0755,
            'private' => 0700,
        ]
	);

	public function __construct($root = null, $writeFlags = LOCK_EX, $linkHandling = self::DISALLOW_LINKS) {
		// Get root path
		$root = $this->findRoot($root);

		// Override permissions with config
		$permissions = \Config::inst()->get(get_class($this), 'file_permissions');

		parent::__construct($root, $writeFlags, $linkHandling, $permissions);
	}

	/**
	 * Determine the root folder absolute system path
	 *
	 * @param string $root
	 * @return string
	 */
	protected function findRoot($root) {
		// Empty root will set the path to assets
		if (!$root) {
			return ASSETS_PATH;
		}

		// Substitute leading ./ with BASE_PATH
		if(strpos($root, './') === 0) {
			return BASE_PATH . substr($root, 1);
		}

		// Substitute leading ./ with parent of BASE_PATH, in case storage is outside of the webroot.
		if(strpos($root, '../') === 0) {
			return dirname(BASE_PATH) . substr($root, 2);
		}

		return $root;
	}

	/**
	 * Provide downloadable url
	 *
	 * @param string $path
	 * @return string|null
	 */
	public function getPublicUrl($path) {
		$rootPath = realpath(BASE_PATH);
		$filesPath = realpath($this->pathPrefix);

		if(stripos($filesPath, $rootPath) === 0) {
			$dir = substr($filesPath, strlen($rootPath));
			return Controller::join_links(Director::baseURL(), $dir, $path);
		}

		// File outside of webroot can't be used
		return null;
	}
}
