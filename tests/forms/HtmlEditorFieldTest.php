<?php

use Filesystem as SS_Filesystem;

/**
 * @package framework
 * @subpackage tests
 */
class HtmlEditorFieldTest extends FunctionalTest {

	protected static $fixture_file = 'HtmlEditorFieldTest.yml';

	protected static $use_draft_site = true;

	protected $requiredExtensions = array(
		'HtmlEditorField_Toolbar' => array('HtmlEditorFieldTest_DummyMediaFormFieldExtension')
	);

	protected $extraDataObjects = array('HtmlEditorFieldTest_Object');

	public function setUp() {
		parent::setUp();

		// Set backend root to /HtmlEditorFieldTest
		AssetStoreTest_SpyStore::activate('HtmlEditorFieldTest');

		// Create a test files for each of the fixture references
		$files = File::get()->exclude('ClassName', 'Folder');
		foreach($files as $file) {
			$fromPath = BASE_PATH . '/framework/tests/forms/images/' . $file->Name;
			$destPath = AssetStoreTest_SpyStore::getLocalPath($file); // Only correct for test asset store
			SS_Filesystem::makeFolder(dirname($destPath));
			copy($fromPath, $destPath);
		}
	}

	public function tearDown() {
		AssetStoreTest_SpyStore::reset();
		parent::tearDown();
	}

	public function testBasicSaving() {
		$obj = new HtmlEditorFieldTest_Object();
		$editor   = new HtmlEditorField('Content');

		$editor->setValue('<p class="foo">Simple Content</p>');
		$editor->saveInto($obj);
		$this->assertEquals('<p class="foo">Simple Content</p>', $obj->Content, 'Attributes are preserved.');

		$editor->setValue('<p>Unclosed Tag');
		$editor->saveInto($obj);
		$this->assertEquals('<p>Unclosed Tag</p>', $obj->Content, 'Unclosed tags are closed.');
	}

	public function testNullSaving() {
		$obj = new HtmlEditorFieldTest_Object();
		$editor = new HtmlEditorField('Content');

		$editor->setValue(null);
		$editor->saveInto($obj);
		$this->assertEquals('', $obj->Content, "Doesn't choke on empty/null values.");
	}

	public function testResizedImageInsertion() {
		$obj = new HtmlEditorFieldTest_Object();
		$editor = new HtmlEditorField('Content');

		$fileID = $this->idFromFixture('Image', 'example_image');
		$editor->setValue(sprintf(
			'<img src="assets/HTMLEditorFieldTest_example.jpg" width="10" height="20" data-fileid="%d" />',
			$fileID
		));
		$editor->saveInto($obj);

		$parser = new CSSContentParser($obj->Content);
		$xml = $parser->getByXpath('//img');
		$this->assertEquals('', (string)$xml[0]['alt'], 'Alt tags are added by default.');
		$this->assertEquals('', (string)$xml[0]['title'], 'Title tags are added by default.');
		$this->assertEquals(10, (int)$xml[0]['width'], 'Width tag of resized image is set.');
		$this->assertEquals(20, (int)$xml[0]['height'], 'Height tag of resized image is set.');

		$neededFilename
			= '/assets/HtmlEditorFieldTest/f5c7c2f814/HTMLEditorFieldTest-example__ResizedImageWzEwLDIwXQ.jpg';

		$this->assertEquals($neededFilename, (string)$xml[0]['src'], 'Correct URL of resized image is set.');
		$this->assertTrue(file_exists(BASE_PATH.DIRECTORY_SEPARATOR.$neededFilename), 'File for resized image exists');
		$this->assertEquals(false, $obj->HasBrokenFile, 'Referenced image file exists.');
	}

	public function testMultiLineSaving() {
		$obj = $this->objFromFixture('HtmlEditorFieldTest_Object', 'home');
		$editor   = new HtmlEditorField('Content');
		$editor->setValue('<p>First Paragraph</p><p>Second Paragraph</p>');
		$editor->saveInto($obj);
		$this->assertEquals('<p>First Paragraph</p><p>Second Paragraph</p>', $obj->Content);
	}

	public function testSavingLinksWithoutHref() {
		$obj = $this->objFromFixture('HtmlEditorFieldTest_Object', 'home');
		$editor   = new HtmlEditorField('Content');

		$editor->setValue('<p><a name="example-anchor"></a></p>');
		$editor->saveInto($obj);

		$this->assertEquals (
			'<p><a name="example-anchor"></a></p>', $obj->Content, 'Saving a link without a href attribute works'
		);
	}

	public function testGetAnchors() {
		if (!class_exists('Page')) {
			$this->markTestSkipped();
		}
		$html = '<div name="foo"></div>
<div name=\'bar\'></div>
<div id="baz"></div>
<div id=\'bam\'></div>
<div id = "baz"></div>
<div id = ""></div>
<div id="some\'id"></div>
<div id=bar></div>';
		$expected = array(
			'foo',
			'bar',
			'baz',
			'bam',
			"some&#039;id",
		);
		$page = new Page();
		$page->Title = 'Test';
		$page->Content = $html;
		$page->write();
		$this->useDraftSite(true);

		$request = new SS_HTTPRequest('GET', '/', array(
			'PageID' => $page->ID,
		));

		$toolBar = new HtmlEditorField_Toolbar(new Controller(), 'test');
		$toolBar->setRequest($request);

		$results = json_decode($toolBar->getanchors(), true);
		$this->assertEquals($expected, $results);
	}

	public function testHtmlEditorFieldFileLocal() {
		$file = new HtmlEditorField_Image('http://domain.com/folder/my_image.jpg?foo=bar');
		$this->assertEquals('http://domain.com/folder/my_image.jpg?foo=bar', $file->URL);
		$this->assertEquals('my_image.jpg', $file->Name);
		$this->assertEquals('jpg', $file->Extension);
		// TODO Can't easily test remote file dimensions
	}

	public function testHtmlEditorFieldFileRemote() {
		$fileFixture = new File(array('Name' => 'my_local_image.jpg', 'Filename' => 'folder/my_local_image.jpg'));
		$file = new HtmlEditorField_Image('http://localdomain.com/folder/my_local_image.jpg', $fileFixture);
		$this->assertEquals('http://localdomain.com/folder/my_local_image.jpg', $file->URL);
		$this->assertEquals('my_local_image.jpg', $file->Name);
		$this->assertEquals('jpg', $file->Extension);
	}
}

/**
 * @package framework
 * @subpackage tests
 */
class HtmlEditorFieldTest_DummyMediaFormFieldExtension extends Extension implements TestOnly {
	public static $fields = null;
	public static $update_called = false;

	public function updateImageForm($form) {
		self::$update_called = true;
		self::$fields = $form->Fields();
	}
}

class HtmlEditorFieldTest_Object extends DataObject implements TestOnly {
	private static $db = array(
		'Title' => 'Varchar',
		'Content' => 'HTMLText',
		'HasBrokenFile' => 'Boolean'
	);
}
