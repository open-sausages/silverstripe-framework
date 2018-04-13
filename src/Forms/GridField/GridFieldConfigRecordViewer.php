<?php

namespace SilverStripe\Forms\GridField;

/**
 * Allows viewing readonly details of individual records.
 */
class GridFieldConfigRecordViewer extends GridFieldConfigBase
{
    public function __construct($itemsPerPage = null)
    {
        parent::__construct($itemsPerPage);

        $this->addComponent(new GridFieldViewButton());
        $this->addComponent(new GridFieldDetailForm());

        $this->extend('updateConfig');
    }
}
