var express = require('express');
var router = express.Router();



/* ROUTES */
router.post('/', createOverall);
router.get('/', getOverall);
/* END_ROUTES */


function createOverall (req, res) {
	var overall = {
		games: 1872,
		wins: 1004,
		mostplayed: 16
	}
	res.json(overall);

	

}

function getOverall (req, res) {
	res.json(req.overall);

}




module.exports = router;