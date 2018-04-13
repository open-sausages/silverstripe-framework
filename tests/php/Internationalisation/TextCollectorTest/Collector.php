<?php

namespace SilverStripe\Internationalisation\Tests\TextCollectorTest;

use SilverStripe\Core\Manifest\ModuleLoader;
use SilverStripe\Dev\TestOnly;
use SilverStripe\Internationalisation\TextCollection\TextCollector;

/**
 * Assist with testing of specific protected methods
 */
class Collector extends TextCollector implements TestOnly
{
    public function resolveDuplicateConflicts_Test($entitiesByModule)
    {
        return $this->resolveDuplicateConflicts($entitiesByModule);
    }

    public function getFileListForModule_Test($modulename)
    {
        $module = ModuleLoader::inst()->getManifest()->getModule($modulename);
        if (!$module) {
            throw new \BadMethodCallException("No module named {$modulename}");
        }
        return $this->getFileListForModule($module);
    }

    public function getConflicts_Test($entitiesByModule)
    {
        return $this->getConflicts($entitiesByModule);
    }

    public function findModuleForClass_Test($class)
    {
        return $this->findModuleForClass($class);
    }
}
