var express = require('express');
var router = express.Router();
var playerManager = require ('../manager/player');


/* ROUTES */
router.post('/', createPlayer);
router.get('/:steamid', getPlayer);
/* END_ROUTES */



function createPlayer(req, res) {
	playerManager.create(function(err, result) {
		res.json(result);
	});
}

function getPlayer(req, res, next) {
	var steamid = req.params.steamid;
	playerManager.getPlayer(steamid, function(err, player) {
		if (player) {
			res.json(player);
		} else {
			next(new Error(new Error(steamid + ' not exists.')));
		}
	});
}



module.exports = router;

