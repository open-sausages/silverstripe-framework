<?php

namespace SilverStripe\Dev\Tests\TaskRunnerTest;

use SilverStripe\Dev\BuildTask;

class DisabledTask extends BuildTask
{
    protected $enabled = false;

    public function run($request)
    {
        // NOOP
    }
}
