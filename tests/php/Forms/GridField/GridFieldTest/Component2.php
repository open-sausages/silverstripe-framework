<?php

namespace SilverStripe\Forms\Tests\GridField\GridFieldTest;

use SilverStripe\Dev\TestOnly;
use SilverStripe\Forms\GridField\GridField;
use SilverStripe\Forms\GridField\GridFieldDataManipulator;
use SilverStripe\ORM\ArrayList;
use SilverStripe\ORM\ListInterface;

class Component2 implements GridFieldDataManipulator, TestOnly
{
    public function getManipulatedData(GridField $gridField, ListInterface $dataList)
    {
        $dataList = clone $dataList;
        $dataList->merge(new ArrayList(array(7, 8, 9, 10, 11, 12)));
        return $dataList;
    }
}
