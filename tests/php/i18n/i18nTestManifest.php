<?php

namespace SilverStripe\Internationalisation\Tests;

use SilverStripe\Control\Director;
use SilverStripe\Core\Injector\Injector;
use SilverStripe\Core\Manifest\ClassManifest;
use SilverStripe\Core\Manifest\ClassLoader;
use SilverStripe\Core\Manifest\ModuleLoader;
use SilverStripe\Core\Manifest\ModuleManifest;
use SilverStripe\Internationalisation\Internationalisation;
use SilverStripe\Internationalisation\Messages\MessageProvider;
use SilverStripe\Internationalisation\Messages\Symfony\ModuleYamlLoader;
use SilverStripe\Internationalisation\Messages\Symfony\SymfonyMessageProvider;
use SilverStripe\Internationalisation\Messages\YamlReader;
use SilverStripe\Internationalisation\Tests\i18nTest\MyObject;
use SilverStripe\Internationalisation\Tests\i18nTest\MySubObject;
use SilverStripe\Internationalisation\Tests\i18nTest\TestDataObject;
use SilverStripe\View\Templates\Viewer;
use SilverStripe\View\Templates\ViewerDataPresenter;
use SilverStripe\View\ThemeResourceLoader;
use SilverStripe\View\ThemeManifest;
use SilverStripe\View\ViewableData;
use Symfony\Component\Translation\Loader\ArrayLoader;
use Symfony\Component\Translation\Translator;

/**
 * Helper trait for bootstrapping test manifest for i18n tests
 */
trait i18nTestManifest
{
    /**
     * Fake webroot with a single module /i18ntestmodule which contains some files with _t() calls.
     *
     * @var string
     */
    protected $alternateBasePath;

    /**
     * Number of test manifests
     *
     * @var int
     */
    protected $manifests = 0;

    /**
     * Number of module manifests
     *
     * @var int
     */
    protected $moduleManifests = 0;

    public static function getExtraDataObjects()
    {
        return [
            TestDataObject::class,
            MyObject::class,
            MySubObject::class,
        ];
    }

    /**
     * @var ThemeResourceLoader
     */
    protected $oldThemeResourceLoader = null;

    /**
     * @var string
     */
    protected $originalLocale = null;

    /**
     * @skipUpgrade
     */
    public function setupManifest()
    {
        // force SSViewer_DataPresenter to cache global template vars before we switch to the
        // test-project class manifest (since it will lose visibility of core classes)
        $presenter = new ViewerDataPresenter(new ViewableData());
        unset($presenter);

        // Switch to test manifest
        $s = DIRECTORY_SEPARATOR;
        $this->alternateBasePath = __DIR__ . $s . 'i18nTest' . $s . "_fakewebroot";
        Director::config()->update('alternate_base_folder', $this->alternateBasePath);

        // New module manifest
        $moduleManifest = new ModuleManifest($this->alternateBasePath);
        $moduleManifest->init(true);
        $this->pushModuleManifest($moduleManifest);

        // Replace old template loader with new one with alternate base path
        $this->oldThemeResourceLoader = ThemeResourceLoader::inst();
        ThemeResourceLoader::set_instance($loader = new ThemeResourceLoader($this->alternateBasePath));
        $loader->addSet(
            '$default',
            $default = new ThemeManifest($this->alternateBasePath, project())
        );
        $default->init(true);

        Viewer::set_themes([
            'testtheme1',
            '$default',
        ]);

        $this->originalLocale = Internationalisation::get_locale();
        Internationalisation::set_locale('en_US');

        // Set new manifest against the root
        $classManifest = new ClassManifest($this->alternateBasePath);
        $classManifest->init(true);
        $this->pushManifest($classManifest);

        // Setup uncached translator
        // This should pull the module list from the above manifest
        $translator = new Translator('en');
        $translator->setFallbackLocales(['en']);
        $loader = new ModuleYamlLoader();
        $loader->setReader(new YamlReader());
        $translator->addLoader('ss', $loader); // Standard ss module loader
        $translator->addLoader('array', new ArrayLoader()); // Note: array loader isn't added by default
        $provider = new SymfonyMessageProvider();
        $provider->setTranslator($translator);
        Injector::inst()->registerService($provider, MessageProvider::class);
    }

    public function tearDownManifest()
    {
        ThemeResourceLoader::set_instance($this->oldThemeResourceLoader);
        Internationalisation::set_locale($this->originalLocale);

        // Reset any manifests pushed during this test
        $this->popManifests();
    }

    /**
     * Safely push a new class manifest.
     * These will be cleaned up on tearDown()
     *
     * @param ClassManifest $manifest
     */
    protected function pushManifest(ClassManifest $manifest)
    {
        $this->manifests++;
        ClassLoader::inst()->pushManifest($manifest);
    }

    protected function pushModuleManifest(ModuleManifest $manifest)
    {
        $this->moduleManifests++;
        ModuleLoader::inst()->pushManifest($manifest);
    }

    /**
     * Pop off all extra manifests
     */
    protected function popManifests()
    {
        // Reset any manifests pushed during this test
        while ($this->manifests > 0) {
            ClassLoader::inst()->popManifest();
            $this->manifests--;
        }
        while ($this->moduleManifests > 0) {
            ModuleLoader::inst()->popManifest();
            $this->moduleManifests--;
        }
    }
}
