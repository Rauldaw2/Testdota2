var express = require('express');
var router = express.Router();
var playerManager = require ('../manager/player');

var playerObj = {};

/* ROUTES */
router.post('/', createPlayer);
router.get('/:steamid', getPlayer);
/* END_ROUTES */


/* PARAMS */
router.param('steamid', checkPlayerExists);
/* END_PARAMS */


function createPlayer(req, res) {
	playerManager.create(function(err, result) {
		res.json(result);
	});
}

function getPlayer(req, res) {
	res.json(req.player);
}


function checkPlayerExists (req, res, next, steamid) {
	if (playerObj[steamid]) {
		req.player = playerObj[steamid];
		next();
	} else {
		next(new Error(steamid + ' not exists'));
	}
}


module.exports = router;

