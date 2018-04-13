<?php

namespace SilverStripe\Forms\Tests\GridField\GridFieldTest;

use SilverStripe\Dev\TestOnly;
use SilverStripe\Forms\GridField\GridFieldHTMLProvider;

class HTMLFragments implements GridFieldHTMLProvider, TestOnly
{
    protected $fragments;

    public function __construct($fragments)
    {
        $this->fragments = $fragments;
    }

    public function getHTMLFragments($gridField)
    {
        return $this->fragments;
    }
}
