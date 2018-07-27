var express = require('express');
var router = express.Router();
var staticModels = require('../staticModels/staticPlanets');
const sqlite = require('sqlite3').verbose();
const models = require('../models');


/* GET home page. */
router.get('/staticPlanets', function(req, res, next) {
  res.send(JSON.stringify(staticModels.planets));
});

router.get("/planets", function(req, res, next) {
  models.planets.findAll({}).then(planetAsPlainObject => {
    const mappedPlanets = planetAsPlainObject.map(planet => ({
      id: planet.id,
      name: planet.name,
      numberOfMoons: planet.numberOfMoons
    }));
    res.send(JSON.stringify(mappedPlanets));
  });
});

module.exports = router;
