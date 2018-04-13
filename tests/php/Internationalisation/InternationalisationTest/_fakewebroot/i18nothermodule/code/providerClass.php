<?php

use SilverStripe\Internationalisation\EntityProvider;

class providerClass implements EntityProvider
{
    public function provideI18nEntities()
    {
        return [
            'i18nProviderClass.TITLE' => 'My Provider Class',
            'i18nProviderClass.PLURALS' => [
                'comment' => 'Plural forms for the test class',
                'one' => 'A class',
                'other' => '{count} classes',
            ],
            'i18nProviderClass.OTHER_MODULE' => [
                'comment' => 'Test string in another module',
                'default' => 'i18ntestmodule string defined in i18nothermodule',
                'module' => 'i18ntestmodule'
            ],
        ];
    }
}
