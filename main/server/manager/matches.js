var express = require('express');
var router = express.Router();

var matches = [];
var numMatches = 0;

/* ROUTES */
router.post('/', createMatch);
router.get('/', getAllMatches);
router.get('/:matchNum', getMatch);
/* END_ROUTES */


/* PARAMS */
router.param('matchNum', checkMatchExists);
/* END_PARAMS */


function createMatch (req, res) {
	var match = {
		matchNum: String(numMatches),
		id: 231223445,
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
	matches[match.matchNum] = match;
	numMatches++;

	res.json(match);
}

function getMatch (req, res) {
	res.json(req.match);
}

function getAllMatches (req, res) {
	res.json(matches);
}

function checkMatchExists (req, res, next, matchNum) {
	if (matches[matchNum]) {
		req.match = matches[matchNum];
		next();
	} else {
		next(new Error(matchNum + ' not exists'));
	}
}



module.exports = router;