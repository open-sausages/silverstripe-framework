<?php

namespace SilverStripe\View\Tests\SSViewerTest;

use SilverStripe\Dev\TestOnly;
use SilverStripe\ORM\ArrayListInterface;
use SilverStripe\View\ArrayData;
use SilverStripe\View\ViewableData;

class CacheTestData extends ViewableData implements TestOnly
{

    public $testWithCalls = 0;
    public $testLoopCalls = 0;

    public function TestWithCall()
    {
        $this->testWithCalls++;
        return ArrayData::create(array('Message' => 'Hi'));
    }

    public function TestLoopCall()
    {
        $this->testLoopCalls++;
        return ArrayListInterface::create(
            array(
            ArrayData::create(array('Message' => 'One')),
            ArrayData::create(array('Message' => 'Two'))
            )
        );
    }
}
