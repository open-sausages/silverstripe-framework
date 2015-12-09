<?php

namespace SilverStripe\Filesystem\Flysystem;

class SecureAssetAdapter extends AssetAdapter {

    /**
     * Name of default folder to save secure assets in
     *
     * @config
     * @var string
     */
    private static $secure_folder = 'protected';

    /**
     * Server specific configuration necessary to block http traffic to a local folder
     *
     * @config
     * @var array Mapping of server configurations to configuration files necessary
     */
    private static $deny_method = array(
        '*' => array(
            '.htaccess' => "Deny from all\n"
        ),
        'iis' => array(
            'web.config' => "<?xml version=\"1.0\" encoding=\"UTF-8\"?>
<configuration>
   <system.webServer>
       <security>
          <authorization>
              <remove users=\"*\" roles=\"\" verbs=\"\" />
          </authorization>
      </security>
   </system.webServer>
</configuration>\n"
        )
    );

    public function __construct($root = null, $writeFlags = LOCK_EX, $linkHandling = self::DISALLOW_LINKS) {
        // Construct as per normal
        parent::__construct($root, $writeFlags, $linkHandling);

        // Ensure root directory denies all HTTP traffic
        $serverType = isset($_SERVER['SERVER_SOFTWARE']) ? $_SERVER['SERVER_SOFTWARE'] : '*';
        $this->restrictServerAccess($serverType);
    }

    protected function findRoot($root) {
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
     * Restrict HTTP requests to this adaptor using the given method
     *
     * @param string $type Name of server configuration
     */
    protected function restrictServerAccess($type) {
        // Determine configurations to write
        $type = strtolower($type);
        $rules = \Config::inst()->get(static::class, 'deny_method');
        $configurations = isset($rules[$type]) ? $rules[$type] : $rules['*'];

        // Apply each configuration
        foreach($configurations as $file => $content) {
            if (!$this->has($file)) {
                $this->write($file, $content, new \League\Flysystem\Config());
            }
        }
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
