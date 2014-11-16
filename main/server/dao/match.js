var db = require('../util/mongodb').db;
var toObjectID = require('../util/mongodb').toObjectID;
var col = db.bind('match');




function create (match, callback) {
	this.insert(match, callback);
}



function getById(matchId, callback) {
	this.findById(matchId, callback);
}

function getAll(callback) {
	this.find({}, function(err, cursor) {
		if (err) {
			return callback(err);
		}

		cursor.toArray(callback);
	});
}

col.bind({
	create: create,
	getById: getById,
	getAll: getAll
	
});


module.exports = col;