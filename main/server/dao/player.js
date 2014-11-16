var db = require('../util/mongodb').db;
var toObjectID = require('../util/mongodb').toObjectID;
var col = db.bind('player');

function create (player, callback) {
	this.insert(player, callback);
}

function getPlayer (steamid, callback) {
	this.findById(steamid, callback);
}

col.bind({
	create: create,
	getPlayer: getPlayer
});


module.exports = col;