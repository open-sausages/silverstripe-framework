<?php

namespace SilverStripe\Dev\Tests\TaskRunnerTest;

class ChildOfAbstractTask extends AbstractTask
{
    protected $enabled = true;

    public function run($request)
    {
        // NOOP
    }
}
