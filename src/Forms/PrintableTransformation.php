<?php

namespace SilverStripe\Forms;

/**
 * Transformation that will make a form printable.
 * Builds on readonly forms with different behaviour for tabsets.
 */
class PrintableTransformation extends ReadonlyTransformation
{

    /**
     * @param TabSet $field
     * @return PrintableTransformationTabSet
     */
    public function transformTabSet($field)
    {
        $transformedField = new PrintableTransformationTabSet($field->Tabs()->transform($this));
        $transformedField->Title = $field->Title();
        $transformedField->TabSet = $field->TabSet;
        return $transformedField;
    }
}
