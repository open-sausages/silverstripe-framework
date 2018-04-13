<?php

namespace SilverStripe\Forms;

use SilverStripe\Core\Convert;
use SilverStripe\View\HTML;

/**
 * The readonly class for our {@link TimeField}.
 */
class TimeFieldReadonly extends TimeField
{
    protected $readonly = true;

    public function Field($properties = array())
    {
        $body = Convert::raw2xml($this->Value());
        return HTML::createTag(
            'span',
            [
                'class' => 'readonly',
                'id' => $this->ID()
            ],
            $body
        );
    }
}
