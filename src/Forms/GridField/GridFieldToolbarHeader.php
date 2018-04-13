<?php

namespace SilverStripe\Forms\GridField;

use SilverStripe\View\Templates\Viewer;

/**
 * Adding this class to a {@link GridFieldConfig} of a {@link GridField} adds
 * a header title to that field.
 *
 * The header serves to display the name of the data the GridField is showing.
 */
class GridFieldToolbarHeader implements GridFieldHTMLProvider
{

    /**
     * @param GridField $gridField
     * @return array
     */
    public function getHTMLFragments($gridField)
    {
        $templates = Viewer::get_templates_by_class($this, '', __CLASS__);
        return array(
            'header' => $gridField->renderWith($templates)
        );
    }
}
