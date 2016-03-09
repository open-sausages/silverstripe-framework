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
		// Check if there is a suitable record
		$record = static::find_shortcode_record($args);
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
	 * Regenerates "[image id=n]" shortcode with new src attribute prior to being edited within the CMS.
	 *
	 * @param array $args Arguments passed to the parser
	 * @param string $content Raw shortcode
	 * @param ShortcodeParser $parser Parser
	 * @param string $shortcode Name of shortcode used to register this handler
	 * @param array $extra Extra arguments
	 * @return string Result of the handled shortcode
	 */
	public static function regenerate_shortcode($args, $content, $parser, $shortcode, $extra = array()) {
		// Check if there is a suitable record
		$record = static::find_shortcode_record($args);
		if($record) {
			$args['src'] = $record->getURL();
		}

		// Rebuild shortcode
		$parts = array();
		foreach($args as $name => $value) {
			$htmlValue = Convert::raw2att($value ?: $name);
			$parts[] = sprintf('%s="%s"', $name, $htmlValue);
		}
		return sprintf("[%s %s]", $shortcode, implode(' ', $parts));
	}

	/**
	 * Find the record to use for a given shortcode
	 *
	 * @param array $args
	 * @return File
	 */
	protected static function find_shortcode_record($args) {
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
		} else {
			return $record;
		}

		// Search for record for use in case of error
		$result = static::singleton()->invokeWithExtensions('getErrorRecordFor', $errorCode);
		$result = array_filter($result);
		if($result) {
			// Return first found error record
			return reset($result);
		}

		// Error conditon with no error handler
		return null;
	}

	/**
	 * Helper method to regenerate all shortcode links.
	 *
	 * @param string $value HTML value
	 * @return string value with links resampled
	 */
	public static function regenerate_html_links($value) {
		// Create a shortcode generator which only regenerates links
		$regenerator = ShortcodeParser::get('regenerator');
		return $regenerator->parse($value);
	}
}
