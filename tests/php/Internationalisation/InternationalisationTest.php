<?php

namespace SilverStripe\Internationalisation\Tests;

use InvalidArgumentException;
use SilverStripe\Control\Director;
use SilverStripe\Core\Convert;
use SilverStripe\Core\Injector\Injector;
use SilverStripe\Dev\SapphireTest;
use SilverStripe\Internationalisation\Internationalisation;
use SilverStripe\Internationalisation\Messages\MessageProvider;
use SilverStripe\Internationalisation\Messages\Symfony\SymfonyMessageProvider;
use SilverStripe\Internationalisation\Tests\InternationalisationTest\TestDataObject;
use SilverStripe\Internationalisation\Tests\InternationalisationTest\TestObject;
use SilverStripe\View\ArrayData;
use SilverStripe\View\Templates\Viewer;

class InternationalisationTest extends SapphireTest
{
    use InternationalisationTestManifest;

    protected function setUp()
    {
        parent::setUp();
        $this->setupManifest();
    }

    protected function tearDown()
    {
        $this->tearDownManifest();
        parent::tearDown();
    }

    public function testGetExistingTranslations()
    {
        $translations = Internationalisation::getSources()->getKnownLocales();
        $this->assertTrue(isset($translations['en_US']), 'Checking for en translation');
        $this->assertEquals($translations['en_US'], 'English (United States)');
        $this->assertTrue(isset($translations['de_DE']), 'Checking for de_DE translation');
    }

    public function testGetClosestTranslation()
    {
        // Validate necessary assumptions for this test
        // As per set of locales loaded from _fakewebroot
        $translations = Internationalisation::getSources()->getKnownLocales();
        $this->assertEquals(
            [
                'en_GB',
                'en_US',
                'fr_FR',
                'de_AT',
                'de_DE',
                'ja_JP',
                'mi_NZ',
                'pl_PL',
                'es_AR',
                'es_ES',
            ],
            array_keys($translations)
        );

        // Test indeterminate locales
        $this->assertEmpty(Internationalisation::get_closest_translation('zz_ZZ'));

        // Test english fallback
        $this->assertEquals('en_US', Internationalisation::get_closest_translation('en_US'));
        $this->assertEquals('en_GB', Internationalisation::get_closest_translation('en_GB'));
        $this->assertEquals('en_US', Internationalisation::get_closest_translation('en_ZZ'));

        // Test spanish fallbacks
        $this->assertEquals('es_AR', Internationalisation::get_closest_translation('es_AR'));
        $this->assertEquals('es_ES', Internationalisation::get_closest_translation('es_ES'));
        $this->assertEquals('es_ES', Internationalisation::get_closest_translation('es_XX'));
    }

    public function testDataObjectFieldLabels()
    {
        Internationalisation::set_locale('de_DE');

        // Load into the translator as a literal array data source
        /** @var SymfonyMessageProvider $provider */
        $provider = Injector::inst()->get(MessageProvider::class);
        $provider->getTranslator()->addResource(
            'array',
            [TestDataObject::class . '.MyProperty' => 'MyProperty'],
            'en_US'
        );
        $provider->getTranslator()->addResource(
            'array',
            [TestDataObject::class . '.MyProperty' => 'Mein Attribut'],
            'de_DE'
        );
        $provider->getTranslator()->addResource(
            'array',
            [TestDataObject::class . '.MyUntranslatedProperty' => 'Mein Attribut'],
            'en_US'
        );

        // Test field labels
        $obj = new TestDataObject();
        $this->assertEquals(
            'Mein Attribut',
            $obj->fieldLabel('MyProperty')
        );
        $this->assertEquals(
            'My Untranslated Property',
            $obj->fieldLabel('MyUntranslatedProperty')
        );
    }

    public function testProvideI18nEntities()
    {
        /** @var SymfonyMessageProvider $provider */
        $provider = Injector::inst()->get(MessageProvider::class);
        $provider->getTranslator()->addResource(
            'array',
            [TestObject::class . '.MyProperty' => 'Untranslated'],
            'en_US'
        );
        $provider->getTranslator()->addResource(
            'array',
            [TestObject::class . '.my_translatable_property' => 'Übersetzt'],
            'de_DE'
        );

        $this->assertEquals(
            TestObject::$my_translatable_property,
            'Untranslated'
        );
        $this->assertEquals(
            TestObject::my_translatable_property(),
            'Untranslated'
        );

        Internationalisation::set_locale('en_US');
        $this->assertEquals(
            TestObject::my_translatable_property(),
            'Untranslated',
            'Getter returns original static value when called in default locale'
        );

        Internationalisation::set_locale('de_DE');
        $this->assertEquals(
            TestObject::my_translatable_property(),
            'Übersetzt',
            'Getter returns translated value when called in another locale'
        );
    }

    public function testTemplateTranslation()
    {
        $oldLocale = Internationalisation::get_locale();
        Internationalisation::config()->update('missing_default_warning', false);

        /** @var SymfonyMessageProvider $provider */
        $provider = Injector::inst()->get(MessageProvider::class);
        $provider->getTranslator()->addResource(
            'array',
            [
                'i18nTestModule.MAINTEMPLATE' => 'Main Template',
                'REPLACEMENTNONAMESPACE' => 'My replacement no namespace: {replacement}',
                'i18nTestModule.LAYOUTTEMPLATE' => 'Layout Template',
                'LAYOUTTEMPLATENONAMESPACE' => 'Layout Template no namespace',
                'i18nTestModule.REPLACEMENTNAMESPACE' => 'My replacement: {replacement}',
                'i18nTestModule.WITHNAMESPACE' => 'Include Entity with Namespace',
                'NONAMESPACE' => 'Include Entity without Namespace',
                'i18nTestModuleInclude_ss.REPLACEMENTINCLUDENAMESPACE' => 'My include replacement: {replacement}',
                'REPLACEMENTINCLUDENONAMESPACE' => 'My include replacement no namespace: {replacement}'
            ],
            'en_US'
        );

        $viewer = new Viewer('i18nTestModule');
        $parsedHtml = Convert::nl2os($viewer->process(new ArrayData([
            'TestProperty' => 'TestPropertyValue'
        ])));
        $this->assertContains(
            Convert::nl2os("Layout Template\n"),
            $parsedHtml
        );
        $this->assertContains(
            Convert::nl2os("Layout Template no namespace\n"),
            $parsedHtml
        );

        $provider->getTranslator()->addResource(
            'array',
            [
                'i18nTestModule.MAINTEMPLATE' => 'TRANS Main Template',
                'REPLACEMENTNONAMESPACE' => 'TRANS My replacement no namespace: {replacement}',
                'i18nTestModule.LAYOUTTEMPLATE' => 'TRANS Layout Template',
                'LAYOUTTEMPLATENONAMESPACE' => 'TRANS Layout Template no namespace',
                'i18nTestModule.REPLACEMENTNAMESPACE' => 'TRANS My replacement: {replacement}',
                'i18nTestModule.WITHNAMESPACE' => 'TRANS Include Entity with Namespace',
                'NONAMESPACE' => 'TRANS Include Entity without Namespace',
                'i18nTestModuleInclude_ss.REPLACEMENTINCLUDENAMESPACE' => 'TRANS My include replacement: {replacement}',
                'REPLACEMENTINCLUDENONAMESPACE' => 'TRANS My include replacement no namespace: {replacement}',
                'i18nTestModule.PLURALS' => 'An item|{count} items',
            ],
            'de_DE'
        );

        Internationalisation::set_locale('de_DE');
        $viewer = new Viewer('i18nTestModule');
        $parsedHtml = Convert::nl2os($viewer->process(new ArrayData(array('TestProperty' => 'TestPropertyValue'))));
        $this->assertContains(
            Convert::nl2os("TRANS Main Template\n"),
            $parsedHtml
        );
        $this->assertContains(
            Convert::nl2os("TRANS Layout Template\n"),
            $parsedHtml
        );
        $this->assertContains(
            Convert::nl2os("TRANS Layout Template no namespace\n"),
            $parsedHtml
        );
        $this->assertContains(
            Convert::nl2os("TRANS My replacement: TestPropertyValue\n"),
            $parsedHtml
        );
        $this->assertContains(
            Convert::nl2os("TRANS Include Entity with Namespace\n"),
            $parsedHtml
        );
        $this->assertContains(
            Convert::nl2os("TRANS Include Entity without Namespace\n"),
            $parsedHtml
        );
        $this->assertContains(
            Convert::nl2os("TRANS My include replacement: TestPropertyValue\n"),
            $parsedHtml
        );
        $this->assertContains(
            Convert::nl2os("TRANS My include replacement no namespace: TestPropertyValue\n"),
            $parsedHtml
        );
        // Check plurals
        $this->assertContains('Single: An item', $parsedHtml);
        $this->assertContains('Multiple: 4 items', $parsedHtml);
        $this->assertContains('None: 0 items', $parsedHtml);

        Internationalisation::set_locale($oldLocale);
    }

    public function testNewTMethodSignature()
    {
        /** @var SymfonyMessageProvider $provider */
        $provider = Injector::inst()->get(MessageProvider::class);
        $provider->getTranslator()->addResource(
            'array',
            [
                'i18nTestModule.NEWMETHODSIG' => 'TRANS New _t method signature test',
                'i18nTestModule.INJECTIONS' => 'TRANS Hello {name} {greeting}. But it is late, {goodbye}'
            ],
            'en_US'
        );

        $entity = "i18nTestModule.INJECTIONS";
        $default = "Hello {name} {greeting}. But it is late, {goodbye}";

        // Test missing entity key
        $translated = Internationalisation::_t(
            $entity . '_DOES_NOT_EXIST',
            $default,
            array("name" => "Mark", "greeting" => "welcome", "goodbye" => "bye")
        );
        $this->assertContains(
            "Hello Mark welcome. But it is late, bye",
            $translated,
            "Testing fallback to the translation default (but using the injection array)"
        );

        // Test standard injection
        $translated = Internationalisation::_t(
            $entity,
            $default,
            ["name" => "Paul", "greeting" => "good you are here", "goodbye" => "see you"]
        );
        $this->assertContains(
            "TRANS Hello Paul good you are here. But it is late, see you",
            $translated,
            "Testing entity, default string and injection array"
        );

        // @deprecated 5.0 Passing in context
        $translated = Internationalisation::_t(
            $entity,
            $default,
            "New context (this should be ignored)",
            ["name" => "Steffen", "greeting" => "willkommen", "goodbye" => "wiedersehen"]
        );
        $this->assertContains(
            "TRANS Hello Steffen willkommen. But it is late, wiedersehen",
            $translated,
            "Full test of translation, using default, context and injection array"
        );

        // Passing in non-associative arrays for placeholders is now an error
        $this->expectExceptionMessage(InvalidArgumentException::class);
        $this->expectExceptionMessage('Injection must be an associative array');

        Internationalisation::_t(
            $entity, // has {name} placeholders
            $default,
            ["Cat", "meow", "meow"]
        );
    }

    /**
     * See @i18nTestModule.ss for the template that is being used for this test
     * */
    public function testNewTemplateTranslation()
    {
        Internationalisation::config()->update('missing_default_warning', false);

        /** @var SymfonyMessageProvider $provider */
        $provider = Injector::inst()->get(MessageProvider::class);
        $provider->getTranslator()->addResource(
            'array',
            [
                'i18nTestModule.NEWMETHODSIG' => 'TRANS New _t method signature test',
                'i18nTestModule.INJECTIONS' => 'TRANS Hello {name} {greeting}. But it is late, {goodbye}'
            ],
            'en_US'
        );

        $viewer = new Viewer('i18nTestModule');
        $parsedHtml = Convert::nl2os($viewer->process(new ArrayData(['TestProperty' => 'TestPropertyValue'])));
        $this->assertContains(
            Convert::nl2os("Hello Mark welcome. But it is late, bye\n"),
            $parsedHtml,
            "Testing fallback to the translation default (but using the injection array)"
        );

        $this->assertContains(
            Convert::nl2os("TRANS Hello Paul good you are here. But it is late, see you\n"),
            $parsedHtml,
            "Testing entity, default string and injection array"
        );

        //test injected calls
        $this->assertContains(
            Convert::nl2os(
                "TRANS Hello " . Director::absoluteBaseURL() . " " . Internationalisation::get_locale()
                . ". But it is late, global calls\n"
            ),
            $parsedHtml,
            "Testing a translation with just entity and injection array, but with global variables injected in"
        );
    }

    public function testGetLocaleFromLang()
    {
        $this->assertEquals('en_US', Internationalisation::getData()->localeFromLang('en'));
        $this->assertEquals('de_DE', Internationalisation::getData()->localeFromLang('de_DE'));
        $this->assertEquals('xy_XY', Internationalisation::getData()->localeFromLang('xy'));
    }

    public function testValidateLocale()
    {
        $this->assertTrue(
            Internationalisation::getData()->validate('en_US'),
            'Known locale in underscore format is valid'
        );
        $this->assertTrue(
            Internationalisation::getData()->validate('en-US'),
            'Known locale in dash format is valid'
        );
        $this->assertFalse(
            Internationalisation::getData()->validate('en'),
            'Short lang format is not valid'
        );
        $this->assertFalse(
            Internationalisation::getData()->validate('xx_XX'),
            'Unknown locale in correct format is not valid'
        );
        $this->assertFalse(
            Internationalisation::getData()->validate(''),
            'Empty string is not valid'
        );
        $this->assertTrue(
            Internationalisation::getData()->validate('de_DE'),
            'Known locale where language is same as region'
        );
        $this->assertTrue(
            Internationalisation::getData()->validate('fr-FR'),
            'Known locale where language is same as region'
        );
        $this->assertTrue(
            Internationalisation::getData()->validate('zh_cmn'),
            'Known locale with all lowercase letters'
        );
    }

    public function testTranslate()
    {
        /** @var SymfonyMessageProvider $provider */
        $provider = Injector::inst()->get(MessageProvider::class);
        $provider->getTranslator()->addResource(
            'array',
            ['i18nTestModule.ENTITY' => 'Entity with "Double Quotes"'],
            'en_US'
        );
        $provider->getTranslator()->addResource(
            'array',
            [
                'i18nTestModule.ENTITY' => 'Entity with "Double Quotes" (de)',
                'i18nTestModule.ADDITION' => 'Addition (de)',
            ],
            'de'
        );
        $provider->getTranslator()->addResource(
            'array',
            [
                'i18nTestModule.ENTITY' => 'Entity with "Double Quotes" (de_AT)',
            ],
            'de_AT'
        );


        $this->assertEquals(
            'Entity with "Double Quotes"',
            Internationalisation::_t('i18nTestModule.ENTITY', 'Ignored default'),
            'Returns translation in default language'
        );

        Internationalisation::set_locale('de');
        $this->assertEquals(
            'Entity with "Double Quotes" (de)',
            Internationalisation::_t('i18nTestModule.ENTITY', 'Entity with "Double Quotes"'),
            'Returns translation according to current locale'
        );

        Internationalisation::set_locale('de_AT');
        $this->assertEquals(
            'Entity with "Double Quotes" (de_AT)',
            Internationalisation::_t('i18nTestModule.ENTITY', 'Entity with "Double Quotes"'),
            'Returns specific regional translation if available'
        );
        $this->assertEquals(
            'Addition (de)',
            Internationalisation::_t('i18nTestModule.ADDITION', 'Addition'),
            'Returns fallback non-regional translation if regional is not available'
        );

        Internationalisation::set_locale('fr');
        $this->assertEquals(
            'Entity with "Double Quotes" (fr)',
            Internationalisation::_t('i18nTestModule.ENTITY', 'Entity with "Double Quotes"'),
            'Non-specific locales fall back to language-only localisations'
        );
    }

    public function pluralisationDataProvider()
    {
        return [
            // English - 2 plural forms
            ['en_NZ', 0, '0 months'],
            ['en_NZ', 1, 'A month'],
            ['en_NZ', 2, '2 months'],
            ['en_NZ', 5, '5 months'],
            ['en_NZ', 10, '10 months'],
            // Polish - 4 plural forms
            ['pl_PL', 0, '0 miesięcy'],
            ['pl_PL', 1, '1 miesiąc'],
            ['pl_PL', 2, '2 miesiące'],
            ['pl_PL', 5, '5 miesięcy'],
            ['pl_PL', 10, '10 miesięcy'],
            // Japanese - 1 plural form
            ['ja_JP', 0, '0日'],
            ['ja_JP', 1, '1日'],
            ['ja_JP', 2, '2日'],
            ['ja_JP', 5, '5日'],
            ['ja_JP', 10, '10日'],
        ];
    }

    /**
     * @dataProvider pluralisationDataProvider()
     * @param string $locale
     * @param int $count
     * @param string $expected
     */
    public function testPluralisation($locale, $count, $expected)
    {
        Internationalisation::set_locale($locale);
        $this->assertEquals(
            $expected,
            _t('Month.PLURALS', 'A month|{count} months', ['count' => $count]),
            "Plural form in locale $locale with count $count should be $expected"
        );
    }

    public function testGetLanguageName()
    {
        Internationalisation::config()->update(
            'common_languages',
            array('de_CGN' => array('name' => 'German (Cologne)', 'native' => 'K&ouml;lsch'))
        );
        $this->assertEquals('German', Internationalisation::getData()->languageName('de_CGN'));
        $this->assertEquals('Deutsch', Internationalisation::with_locale('de_CGN', function () {
            return Internationalisation::getData()->languageName('de_CGN');
        }));
    }
}
