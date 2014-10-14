function Profile() {

	var _profile = {
		name: 'Default',
		SteamID: 0,
		overallMatches: 0,
		wonMatches: 0
	};

	this.getValue = function(key) {
		return _profile[key];
	};
  
    this.getAllValues = function () {
      var result = [];
      for(var key in _profile) {
        result.push(_profile[key]);
      }
      return result;
    };
  
}

module.exports = {
  create: function() {
    return new Profile();
  },
  Profile: Profile
};