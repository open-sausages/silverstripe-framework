<?php

namespace SilverStripe\Filesystem\Flysystem;

use League\Flysystem\AdapterInterface;

/**
 * Represents an AbstractAdapter which exposes its assets via public urls
 */
interface URLAdapter extends AdapterInterface {

	/**
	 * Provide downloadable url
	 *
	 * @param string $path
	 * @return string|null
	 */
	public function getPublicUrl($path);
}
