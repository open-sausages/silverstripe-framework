<?php

/**
 * Represents an Image
 *
 * @package framework
 * @subpackage filesystem
 */
class Image extends File implements ShortcodeHandler {

	public function __construct($record = null, $isSingleton = false, $model = null) {
		parent::__construct($record, $isSingleton, $model);
		$this->File->setAllowedCategories('image/supported');
	}

	public function getCMSFields() {
		$fields = parent::getCMSFields();
		$fields->insertAfter(
			'LastEdited',
			new ReadonlyField("Dimensions", _t('AssetTableField.DIM','Dimensions') . ':')
		);
		return $fields;
	}

	public function getIsImage() {
		return true;
	}

	/**
	 * Replace"[image id=n]" shortcode with an image reference.
	 *
	 * @param array $args Arguments passed to the parser
	 * @param string $content Raw shortcode
	 * @param ShortcodeParser $parser Parser
	 * @param string $shortcode Name of shortcode used to register this handler
	 * @param array $extra Extra arguments
	 * @return string Result of the handled shortcode
	 */
	public static function handle_shortcode($args, $content, $parser, $shortcode, $extra = array()) {
		if(!isset($args['id']) || !is_numeric($args['id'])) {
			return null;
		}

		/** @var Image $record */
		$record = Image::get()->byID($args['id']);

		// Check record for common errors
		$errorCode = null;
		if (!$record) {
			$errorCode = 404;
		} elseif(!$record->canView()) {
			$errorCode = 403;
		}
		if($errorCode) {
			$result = static::singleton()->invokeWithExtensions('getErrorRecordFor', $errorCode);
			$result = array_filter($result);
			if($result) {
				$record = reset($result);
			}
		}

		// There were no suitable matches at all.
		if (!$record) {
			return null;
		}

		// Build the HTML tag
		$attrs = array_merge(
			// Set overrideable defaults
			['src' => '', 'alt' => $record->Title],
			// Use all other shortcode arguments
			$args,
			// But enforce some values
			['id' => '', 'src' => $record->Link()]
		);

		// Clean out any empty attributes
		$attrs = array_filter($attrs, function($v) {return (bool)$v;});

		// Condense to HTML attribute string
		$attrsStr = join(' ', array_map(function($name) use ($attrs) {
			return Convert::raw2att($name) . '="' . Convert::raw2att($attrs[$name]) . '"';
		}, array_keys($attrs)));

		return '<img ' . $attrsStr . ' />';
	}

	/**
	 * Helper method to regenerate all image links in the given HTML block, optionally resizing them if
	 * the image native size differs to the width and height properties on the <img /> tag
	 *
	 * @param string $value HTML value
	 * @return string value with links resampled
	 */
	public static function regenerate_html_links($value) {
		$htmlValue = Injector::inst()->create('HTMLValue', $value);

		// Resample images and add default attributes
		$imageElements = $htmlValue->getElementsByTagName('img');
		if($imageElements) foreach($imageElements as $imageElement) {
			$imageDO = null;
			$src = $imageElement->getAttribute('src');

			// Skip if this image has a shortcode 'src'
			if(preg_match('/^\[.+\]$/', $src)) {
				continue;
			}

			// strip any ?r=n data from the src attribute
			$src = preg_replace('/([^\?]*)\?r=[0-9]+$/i', '$1', $src);

			// Resample the images if the width & height have changed.
			$fileID = $imageElement->getAttribute('data-fileid');
			if($fileID && ($imageDO = File::get()->byID($fileID))) {
				$width  = (int)$imageElement->getAttribute('width');
				$height = (int)$imageElement->getAttribute('height');
				if($imageDO instanceof Image && $width && $height
					&& ($width != $imageDO->getWidth() || $height != $imageDO->getHeight())
				) {
					//Make sure that the resized image actually returns an image:
					$resized = $imageDO->ResizedImage($width, $height);
					if($resized) {
						$imageDO = $resized;
					}
				}
				$src = $imageDO->getURL();
			}

			// Update attributes, including intelligent defaults for alt and title
			$imageElement->setAttribute('src', $src);
			if(!$imageElement->getAttribute('alt')) {
				$imageElement->setAttribute('alt', '');
			}
			if(!$imageElement->getAttribute('title')) {
				$imageElement->setAttribute('title', '');
			}

			// Use this extension point to manipulate images inserted using TinyMCE,
			// e.g. add a CSS class, change default title
			self::singleton()
				->extend('regenerateImageHTML', $imageDO, $imageElement);
		}
		return $htmlValue->getContent();
	}
}
