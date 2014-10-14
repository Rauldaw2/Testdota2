var profileTest = require('./profile');
var assert = require('chai').assert;


describe('Profile tests', function () {
	var profile = profileTest.create();
	describe('Creating Profile tests', function() {
		it('should create an instance of Profile', function (){
			assert.instanceOf(profile, profileTest.Profile, 'profile is an instance of Profile');
		});
	});
	describe('Assigning correct values', function () {
		it('Name should be "Default"', function () {
			assert.equal(profile.getValue('name'), 'Default');
		});
		it('SteamID should be zero', function () {
			assert.equal(profile.getValue('SteamID'), 0);
		});
		it('overallMatches should be zero', function () {
			assert.equal(profile.getValue('overallMatches'), 0);
		});
		it('wonMatches should be zero', function () {
			assert.equal(profile.getValue('wonMatches'), 0);
		});
		var compare = ['Default', 0, 0, 0];
		it('all values are correct', function () {
			assert.deepEqual(profile.getAllValues(), compare);
		});
	})
})