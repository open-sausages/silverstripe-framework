<?php

namespace SilverStripe\Forms\Tests\GridField\GridFieldConfigTest;

use SilverStripe\Dev\TestOnly;
use SilverStripe\Forms\GridField\GridFieldURLHandler;

class MyComponent implements GridFieldURLHandler, TestOnly
{
    public function getURLHandlers($gridField)
    {
        return array();
    }
}
