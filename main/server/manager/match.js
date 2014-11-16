var daoMatch = require('../dao/match');





function create (callback) {
	var match = {
		matchId: 231223445,
		mode: 1,
		heroID: 64,
		lvl: 22,
		kills: 9,
		deaths: 5,
		assists: 11,
		status: 1,
		lhits: 89,
		denies: 17,
		xp: 433,
		gold: 305
	}
	daoMatch.create(match, callback);
}

function getById(matchId, callback) {
	daoMatch.getById(matchId, callback);
}

function getAll(callback) {
	daoMatch.getAll(callback);
}




module.exports = {
	create: create,
	getById: getById,
	getAll: getAll
	
};