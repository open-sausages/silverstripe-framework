<?php

use SilverStripe\Filesystem\Storage\ProtectedFileController;

class ProtectedFileControllerTest extends SapphireTest {

    /**
     * @dataProvider getFilenames
     */
    public function testIsValidFilename($name, $isValid) {
        $controller = new ProtectedFileController();
        $this->assertEquals(
            $isValid,
            $controller->isValidFilename($name),
            "Assert filename \"$name\" is " . $isValid ? "valid" : "invalid"
        );
    }

    public function getFilenames() {
        return array(
            // Valid names
            array('name.jpg', true),
            array('parent/name.jpg', true),
            array('parent/name', true),
            array('parent\name.jpg', true),
            array('parent\name', true),
            array('name', true),

            // Invalid names
            array('.invalid/name.jpg', false),
            array('.invalid\name.jpg', false),
            array('.htaccess', false),
            array('test/.htaccess.jpg', false),
            array('name/.jpg', false),
            array('test\.htaccess.jpg', false),
            array('name\.jpg', false)
        );
    }
}