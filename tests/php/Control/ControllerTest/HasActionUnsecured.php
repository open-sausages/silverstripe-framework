<?php

namespace SilverStripe\Control\Tests\ControllerTest;

use SilverStripe\Dev\TestOnly;

class HasActionUnsecured extends HasAction implements TestOnly
{
    private static $url_segment = 'HasAction_Unsecured';

    public function defined_action()
    {
    }
}
