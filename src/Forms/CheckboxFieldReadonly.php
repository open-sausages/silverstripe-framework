<?php

namespace SilverStripe\Forms;

/**
 * Readonly version of a checkbox field - "Yes" or "No".
 */
class CheckboxFieldReadonly extends ReadonlyField
{

    public function performReadonlyTransformation()
    {
        return clone $this;
    }

    public function Value()
    {
        return $this->value ?
            _t('SilverStripe\\Forms\\CheckboxField.YESANSWER', 'Yes') :
            _t('SilverStripe\\Forms\\CheckboxField.NOANSWER', 'No');
    }

    public function getValueCast()
    {
        return 'Text';
    }
}
