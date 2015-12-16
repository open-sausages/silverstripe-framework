<?php

namespace SilverStripe\Filesystem;

use DataObject;
use Injector;
use SilverStripe\Filesystem\Storage\AssetStore;

/**
 * Provides an interaction mechanism between objects and linked asset references.
 */
class AssetControlExtension extends \DataExtension {

    /**
     * When archiving versioned dataobjects, should assets be archived with them?
     * If false, assets will be deleted when the object is removed from draft.
     * If true, assets will be instead moved to the protected store.
     *
     * @var bool
     */
    private static $archive_assets = false;

    public function onAfterDelete() {
        $assets = $this->findAssets($this->owner);

        // When deleting from live, just secure assets
        if($this->onLive()) {
            $this->protectAll($assets);
            return;
        }

        // When deleting from stage then check if we should archive assets
        $archive = $this->owner->config()->archive_assets;
        if($archive && $this->isVersioned()) {
            // Archived assets are kept protected
            $this->protectAll($assets);
        } else {
            // Otherwise remove all assets
            $this->deleteAll($assets);
        }
    }

    /**
     * Return a list of all tuples attached to this dataobject
     * Note: Variants are excluded
     *
     * @param DataObject $record to search
     * @return array
     */
    protected function findAssets(DataObject $record) {
        // Search for dbfile instances
        $files = array();
        foreach($record->db() as $field => $db) {
            list($dbClass) = explode('(', $db);

            // Extract assets from this database field
            $fieldAssets = array();
            if(is_a($dbClass, 'DBFile', true)) {
                $fieldAssets = array($record->dbObject($field)->getValue());
            } elseif (is_a($dbClass, 'HTMLText', true)){
                // @todo once we implement DBFile shortcodes
            }

            // Omit variant and merge with set
            foreach($fieldAssets as $next) {
                unset($next['Variant']);
                if ($next) {
                    $files[] = $next;
                }
            }
        }

        return array_unique($files);
    }

    /**
     * Determine if this record is a live version
     *
     * @return bool
     */
    protected function onLive() {
        if(!$this->isVersioned()) {
            return false;
        }
		$mode = $this->owner->getSourceQueryParam("Versioned.mode");
		$stage = $this->owner->getSourceQueryParam("Versioned.stage");
		return strcasecmp($mode, 'stage') === 0
            && strcasecmp($stage, \Versioned::get_live_stage()) === 0;
    }

    /**
     * Determine if versioning rules should be applied to this object
     *
     * @return bool
     */
    protected function isVersioned() {
        return $this->owner->has_extension('Versioned');
    }

    /**
     * Delete all assets in the tuple list
     *
     * @param array $assets
     */
    protected function deleteAll($assets) {
        $store = $this->getAssetStore();
        foreach($assets as $asset) {
            $store->delete($asset['Filename'], $asset['Hash']);
        }
    }

    /**
     * Move all assets in the list to the protected store
     *
     * @param array $assets
     */
    protected function protectAll($assets) {
        $store = $this->getAssetStore();
        foreach($assets as $asset) {
            $store->protect($asset['Filename'], $asset['Hash']);
        }
    }

    /**
     * @return AssetStore
     */
    protected function getAssetStore() {
        return Injector::inst()->get('AssetStore');
    }

}
