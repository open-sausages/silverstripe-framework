<?php

namespace SilverStripe\Core\Manifest;

use SilverStripe\View\Templates\TemplateGlobalProvider;

/**
 * Module manifest holder
 */
class ModuleLoader implements TemplateGlobalProvider
{
    /**
     * @var self
     */
    private static $instance;

    /**
     * @var ModuleManifest[] Module manifests
     */
    protected $manifests = array();

    /**
     * @return self
     */
    public static function inst()
    {
        return self::$instance ? self::$instance : self::$instance = new static();
    }

    /**
     * Get module by name from the current manifest.
     * Alias for ::inst()->getManifest()->getModule()
     *
     * @param string $module
     * @return Module
     */
    public static function getModule($module)
    {
        return static::inst()->getManifest()->getModule($module);
    }

    /**
     * Returns the currently active class manifest instance that is used for
     * loading classes.
     *
     * @return ModuleManifest
     */
    public function getManifest()
    {
        return $this->manifests[count($this->manifests) - 1];
    }

    /**
     * Returns true if this class loader has a manifest.
     *
     * @return bool
     */
    public function hasManifest()
    {
        return (bool)$this->manifests;
    }

    /**
     * Pushes a module manifest instance onto the top of the stack.
     *
     * @param ModuleManifest $manifest
     */
    public function pushManifest(ModuleManifest $manifest)
    {
        $this->manifests[] = $manifest;
    }

    /**
     * @return ModuleManifest
     */
    public function popManifest()
    {
        return array_pop($this->manifests);
    }

    /**
     * Check number of manifests
     *
     * @return int
     */
    public function countManifests()
    {
        return count($this->manifests);
    }

    /**
     * Initialise the module loader
     *
     * @param bool $includeTests
     * @param bool $forceRegen
     */
    public function init($includeTests = false, $forceRegen = false)
    {
        foreach ($this->manifests as $manifest) {
            $manifest->init($includeTests, $forceRegen);
        }
    }

    public static function get_template_global_variables()
    {
        return ['ModulePath' => 'getModulePath'];
    }

    /**
     * Given some pre-defined modules, return the filesystem path of the module.
     * @param string $name Name of module to find path of
     * @return string
     */
    public static function getModulePath($name)
    {
        return self::getModule($name)->getRelativePath();
    }
}
