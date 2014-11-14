var express = require('express');
var router = express.Router();

var allHeroesChart = [];
var numHeroes = 0;

/* ROUTES */
router.post('/', createHeroChart);
router.get('/', getAllHeroesChart);
router.get('/:heroNum', getHeroChart);
/* END_ROUTES */

/* PARAMS */
router.param('heroNum', checkHeroExists);
/* END_PARAMS */

function createHeroChart (req, res) {
	var hero = {
		heroNum: String(numHeroes),
		id: 26,
		name: 'Lion',
		type: 'Intelligence',
		avatar: 'http://cdn.dota2.com/apps/dota2/images/heroes/lion_sb.png',
		games: 32,
		wins: 19,
		avg_lvl: 17,
		avg_kills: 6,
		avg_deaths: 11,
		avg_assists: 9,
		avg_gold_earn: 4569
	}
	allHeroesChart[hero.heroNum] = hero;
	numHeroes++;	
	res.json(hero);
}

function getHeroChart (req, res) {
	res.json(req.hero);
}

function getAllHeroesChart (req, res) {
	res.json(allHeroesChart);
}

function checkHeroExists (req, res, next, heroNum) {
	if (allHeroesChart[heroNum]) {
		req.hero = allHeroesChart[heroNum];
		next();
	} else {
		next(new Error(heroNum + ' not exists'));
	}
}


module.exports = router;