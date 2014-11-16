var express = require('express');
var router = express.Router();
var matchManager = require ('../manager/match');



/* ROUTES */
router.post('/', createMatch);
router.get('/', getAll);
router.get('/:matchID', getMatch);
/* END_ROUTES */




function createMatch (req, res) {
	matchManager.create(function(err, result) {
		res.json(result);
	});
}

function getMatch(req, res, next) {
	var matchId = req.params.matchId;
	matchManager.getById(matchId, function(err, match) {
		if (match) {
			res.json(match);
		} else {
			next(new Error(new Error(matchId + ' not exists')));
		}
	});
}

function getAll(req, res) {
	matchManager.getAll(function(err, matches) {
		res.json(matches);
	});
}




module.exports = router;