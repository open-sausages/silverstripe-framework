<?php

namespace SilverStripe\Internationalisation\Tests\InternationalisationTest;

use SilverStripe\Dev\TestOnly;
use SilverStripe\Internationalisation\EntityProvider;

class TestObject implements TestOnly, EntityProvider
{
    static $my_translatable_property = "Untranslated";

    public static function my_translatable_property()
    {
        return _t(__CLASS__ . ".my_translatable_property", self::$my_translatable_property);
    }

    public function provideI18nEntities()
    {
        return [
            __CLASS__ . ".my_translatable_property" => self::$my_translatable_property,
        ];
    }
}
