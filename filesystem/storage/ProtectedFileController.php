<?php

namespace SilverStripe\Filesystem\Storage;

/**
 * Provides routing for session-whitelisted protected files
 *
 * Class ProtectedFileController
 * @package SilverStripe\Filesystem\Storage
 */
class ProtectedFileController extends \Controller {
    private static $url_handlers = array(
        '$Filename' => "handleFile"
    );

    private static $allowed_actions = array(
        'handleFile'
    );

    public function handleFile(\SS_HTTPRequest $request) {
        // Unshift all request parameters
        $filename = $request->param('Filename');
        while($next = $request->shift()) {
            $filename = \File::join_paths($filename, $next);
        }
        $filename = $filename . "." . $request->getExtension();

        // Todo - Pass to AssetStore
        return new \SS_HTTPResponse($filename);
    }
}
