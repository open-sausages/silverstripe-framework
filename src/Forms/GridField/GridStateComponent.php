<?php

namespace SilverStripe\Forms\GridField;

/**
 * @see GridState
 */
class GridStateComponent implements GridFieldHTMLProvider
{

    public function getHTMLFragments($gridField)
    {
        return array(
            'before' => $gridField->getState(false)->Field()
        );
    }
}
