<?php

namespace SilverStripe\Forms\HTMLEditor;

use SilverStripe\Forms\HTMLReadonlyField;

/**
 * Readonly version of an {@link HTMLEditorField}.
 */
class HTMLEditorFieldReadonly extends HTMLReadonlyField
{
    private static $casting = [
        'Value' => 'HTMLText',
    ];

    public function Type()
    {
        return 'htmleditorfield readonly';
    }
}
