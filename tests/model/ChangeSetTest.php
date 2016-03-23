<?php

/**
 * Test {@see ChangeSet} and {@see ChangeSetItem} models
 */
class ChangeSetTest extends SapphireTest {

	protected static $fixture_file = 'ChangeSetTest.yml';

	protected $extraDataObjects = [
		'ChangeSetTest_Object',
		'ChangeSetTest_Owner',
		'ChangeSetTest_Owned',
	];

	public function testCanPublish() {
		Session::clear("loggedInAs");

		// Test un-authenticated user cannot publish
		/** @var ChangeSet $changeSet */
		$changeSet = $this->objFromFixture('ChangeSet', 'set1');
		$this->assertFalse($changeSet->canPublish());

		// User with only one of the necessary permissions cannot publish
		$this->logInWithPermission('CMS_ACCESS_CampaignAdmin');
		$this->assertFalse($changeSet->canPublish());
		$this->logInWithPermission('PERM_canPublish');
		$this->assertFalse($changeSet->canPublish());

		// Test user with the necessary minimum permissions can login
		$this->logInWithPermission([
			'CMS_ACCESS_CampaignAdmin',
			'PERM_canPublish'
		]);
		$this->assertTrue($changeSet->canPublish());
	}

	public function testCanRevert() {
		$this->markTestSkipped("Requires ChangeSet::publish to be implemented first");
	}

	public function testCanEdit() {
		/** @var ChangeSet $changeSet */
		$changeSet = $this->objFromFixture('ChangeSet', 'set1');
		Session::clear("loggedInAs");
		$this->assertFalse($changeSet->canEdit());
		$this->logInWithPermission('SomeWrongPermission');
		$this->assertFalse($changeSet->canEdit());
		$this->logInWithPermission('CMS_ACCESS_CampaignAdmin');
		$this->assertTrue($changeSet->canEdit());
	}

	public function testCanCreate() {
		/** @var ChangeSet $changeSet */
		$changeSet = ChangeSet::singleton();
		Session::clear("loggedInAs");
		$this->assertFalse($changeSet->canCreate());
		$this->logInWithPermission('SomeWrongPermission');
		$this->assertFalse($changeSet->canCreate());
		$this->logInWithPermission('CMS_ACCESS_CampaignAdmin');
		$this->assertTrue($changeSet->canCreate());
	}

	public function testCanDelete() {
		/** @var ChangeSet $changeSet */
		$changeSet = $this->objFromFixture('ChangeSet', 'set1');
		Session::clear("loggedInAs");
		$this->assertFalse($changeSet->canDelete());
		$this->logInWithPermission('SomeWrongPermission');
		$this->assertFalse($changeSet->canDelete());
		$this->logInWithPermission('CMS_ACCESS_CampaignAdmin');
		$this->assertTrue($changeSet->canDelete());
	}

	public function testCanView() {
		/** @var ChangeSet $changeSet */
		$changeSet = $this->objFromFixture('ChangeSet', 'set1');
		Session::clear("loggedInAs");
		$this->assertFalse($changeSet->canView());
		$this->logInWithPermission('SomeWrongPermission');
		$this->assertFalse($changeSet->canView());
		$this->logInWithPermission('CMS_ACCESS_CampaignAdmin');
		$this->assertTrue($changeSet->canView());
	}

	/**
	 * Test that adding owners also includes owned
	 */
	public function testOwnedAddImplicitly() {
		// @todo
		$this->markTestSkipped("Won't work until ChangeSetItem::findOwners/findOwned is implemented");
		return;

		/** @var ChangeSet $set2 */
		$set2 = $this->objFromFixture('ChangeSet', 'set2');
		$owner1 = $this->objFromFixture('ChangeSetTest_Owner', 'owner1');

		// Test that adding new owner adds all owned automatically
		$set2->addObject($owner1);
		$objectIDs = $set2->Changes()->column('ObjectID');
		$expected = [
			$this->idFromFixture('ChangeSetTest_Owner', 'owner1'),
			$this->idFromFixture('ChangeSetTest_Owned', 'owned1a'),
			$this->idFromFixture('ChangeSetTest_Owned', 'owned1b'),
		];
		sort($objectIDs);
		sort($expected);
		$this->assertEquals($expected, $objectIDs);

		// Test that owned items are added implicitly
		$objectIDs = $set2->Changes()->filter('Added', ChangeSetItem::IMPLICITLY)->column('ObjectID');
		$expected = [
			$this->idFromFixture('ChangeSetTest_Owned', 'owned1a'),
			$this->idFromFixture('ChangeSetTest_Owned', 'owned1b'),
		];
		sort($objectIDs);
		sort($expected);
		$this->assertEquals($expected, $objectIDs);

		// Test that the owner is the only added implicit item
		$objectIDs = $set2->Changes()->filter('Added', ChangeSetItem::EXPLICITLY)->column('ObjectID');
		$expected = [
			$this->idFromFixture('ChangeSetTest_Owner', 'owner1')
		];
		$this->assertEquals($expected, $objectIDs);
	}
}

/**
 * Object with specific permissions
 *
 * @mixin Versioned
 */
class ChangeSetTest_Object extends DataObject implements TestOnly {

	protected static $db = [
		'Title' => 'Varchar(255)'
	];

	private static $extensions = [
		'Versioned'
	];

	public function canEdit($member = null) {
		return $this->can(__FUNCTION__, $member);
	}

	public function canDelete($member = null) {
		return $this->can(__FUNCTION__, $member);
	}

	public function canCreate($member = null, $context = array()) {
		return $this->can(__FUNCTION__, $member, $context);
	}

	public function canPublish($member = null, $context = array()) {
		return $this->can(__FUNCTION__, $member, $context);
	}

	public function canUnpublish($member = null, $context = array()) {
		return $this->can(__FUNCTION__, $member, $context);
	}

	public function can($perm, $member = null, $context = array()) {
		$perms = [
			"PERM_{$perm}",
			'CAN_ALL',
		];
		return Permission::checkMember($member, $perms);
	}

}

class ChangeSetTest_Owner extends ChangeSetTest_Object implements TestOnly {
	private static $has_many = [
		'Children' => 'ChangeSetTest_Owned',
	];
	private static $owns = ['Children'];
}

class ChangeSetTest_Owned extends ChangeSetTest_Object implements TestOnly {
	private static $has_one = [
		'Parent' => 'ChangeSetTest_Owner'
	];
	private static $owned_by = ['Parent'];
}
