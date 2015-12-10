<?php

namespace SilverStripe\Filesystem\Flysystem;

class ProtectedAssetAdapter extends AssetAdapter {

    /**
     * Name of default folder to save secure assets in
     *
     * @config
     * @var string
     */
    private static $secure_folder = 'assets/.protected';

    protected function findRoot($root) {
        // Use explicitly defined path
        if($root) {
            return parent::findRoot($root);
        }

        // Use environment defined path
        if(defined('SS_PROTECTED_ASSETS_PATH')) {
            return SS_PROTECTED_ASSETS_PATH;
        }

        return BASE_PATH . '/' . \Config::inst()->get(static::class, 'secure_folder');
    }

    /**
     * Provide downloadable url
     *
     * @param string $path
     * @return string|null
     */
    public function getPublicUrl($path) {
        // Public URLs are handled via a request handler within /assets.
        // If assets are stored locally, then asset paths of protected files should be equivalent.
        return \Controller::join_links(\Director::baseURL(), ASSETS_DIR, $path);
    }
}
