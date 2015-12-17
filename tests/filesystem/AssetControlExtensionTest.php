<?php
use SilverStripe\Filesystem\Storage\AssetStore;

/**
 * Tests {@see AssetControlExtension}
 */
class AssetControlExtensionTest extends SapphireTest {

    protected $extraDataObjects = array(
        'AssetControlExtensionTest_VersionedObject',
        'AssetControlExtensionTest_Object'
    );

	public function setUp() {
		parent::setUp();

		// Set backend and base url
		AssetStoreTest_SpyStore::activate('AssetControlExtensionTest');

        // Setup fixture manually
        $object1 = new AssetControlExtensionTest_VersionedObject();
        $object1->Title = 'My object';
        $fish1 = realpath(__DIR__ .'/../model/testimages/test-image-high-quality.jpg');
        $object1->Header->setFromLocalFile($fish1, 'Header/MyObjectHeader.jpg');
        $object1->Download->setFromString('file content', 'Documents/File.txt');
        $object1->write();
        $object1->publish('Stage', 'Live');

        $object2 = new AssetControlExtensionTest_Object();
        $object2->Title = 'Unversioned';
        $object2->Image->setFromLocalFile($fish1, 'Images/BeautifulFish.jpg');
        $object2->write();
	}

	public function tearDown() {
		AssetStoreTest_SpyStore::reset();
		parent::tearDown();
	}

    public function testFileDelete() {
        /** @var AssetControlExtensionTest_VersionedObject $object1 */
        $object1 = AssetControlExtensionTest_VersionedObject::get()->first();
        /** @var AssetControlExtensionTest_Object $object2 */
        $object2 = AssetControlExtensionTest_Object::get()->first();

        $this->assertTrue($object1->Download->exists());
        $this->assertTrue($object1->Header->exists());
        $this->assertTrue($object2->Image->exists());
        $this->assertEquals(AssetStore::VISIBILITY_PUBLIC, $object1->Download->getVisibility());
        $this->assertEquals(AssetStore::VISIBILITY_PUBLIC, $object1->Header->getVisibility());
        $this->assertEquals(AssetStore::VISIBILITY_PUBLIC, $object2->Image->getVisibility());

        // Check live stage for versioned objects
        $object1Live = Versioned::get_one_by_stage('AssetControlExtensionTest_VersionedObject', 'Live');
        $this->assertTrue($object1Live->Download->exists());
        $this->assertTrue($object1Live->Header->exists());
        $this->assertEquals(AssetStore::VISIBILITY_PUBLIC, $object1Live->Download->getVisibility());
        $this->assertEquals(AssetStore::VISIBILITY_PUBLIC, $object1Live->Header->getVisibility());

        // Delete live records; Should cause versioned records to be protected
        $object1Live->delete();
        $this->assertTrue($object1->Download->exists());
        $this->assertTrue($object1->Header->exists());
        $this->assertTrue($object1Live->Download->exists());
        $this->assertTrue($object1Live->Header->exists());
        $this->assertEquals(AssetStore::VISIBILITY_PROTECTED, $object1->Download->getVisibility());
        $this->assertEquals(AssetStore::VISIBILITY_PROTECTED, $object1->Header->getVisibility());

        // Delete draft record; Should remove all records
        $object1->delete();
        $object2->delete();
        $this->assertFalse($object1->Download->exists());
        $this->assertFalse($object1->Header->exists());
        $this->assertFalse($object1Live->Download->exists());
        $this->assertFalse($object1Live->Header->exists());
        $this->assertFalse($object2->Image->exists());
        $this->assertNull($object1->Download->getVisibility());
        $this->assertNull($object1->Header->getVisibility());
        $this->assertNull($object2->Image->getVisibility());

    }
}

/**
 * Versioned object with attached assets
 *
 * @property string $Title
 * @property DBFile $Header
 * @property DBFile $Download
 * @mixin Versioned
 */
class AssetControlExtensionTest_VersionedObject extends DataObject implements TestOnly {
    private static $extensions = array(
        'Versioned'
    );

    private static $db = array(
        'Title' => 'Varchar(255)',
        'Header' => "DBFile('image/supported')",
        'Download' => 'DBFile'
    );
}

/**
 * A basic unversioned object
 *
 * @property string $Title
 * @property DBFile $Image
 */
class AssetControlExtensionTest_Object extends DataObject implements TestOnly {
    private static $db = array(
        'Title' => 'Varchar(255)',
        'Image' => "DBFile('image/supported')"
    );
}
