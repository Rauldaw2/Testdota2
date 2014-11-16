var daoPlayer = require('../dao/player');

function create(callback) {

	var player = {
		steamid: 99739,
		personaname: 'gstprz-',
		avatar: 'http://media.steampowered.com/steamcommunity/public/images/avatars/33/334c5fbbf74aac729f4b00ad31fb89e57e6a3150_medium.jpg',
		profileurl: 'http://steamcommunity.com/id/gstprz-/'	
	};

	daoPlayer.create(player, callback);
}

function getPlayer(steamid, callback) {
	daoPlayer.getPlayer(steamid, callback);
}



module.exports = {
	create: create,
	getPlayer: getPlayer
};
