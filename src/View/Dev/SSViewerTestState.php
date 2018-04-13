<?php

namespace SilverStripe\View\Dev;

use SilverStripe\Control\ContentNegotiator;
use SilverStripe\Dev\SapphireTest;
use SilverStripe\Dev\State\TestState;
use SilverStripe\View\Templates\Viewer;

class SSViewerTestState implements TestState
{
    public function setUp(SapphireTest $test)
    {
        Viewer::set_themes(null);
        Viewer::setRewriteHashLinksDefault(null);
        ContentNegotiator::setEnabled(null);
    }

    public function tearDown(SapphireTest $test)
    {
    }

    public function setUpOnce($class)
    {
    }

    public function tearDownOnce($class)
    {
    }
}
