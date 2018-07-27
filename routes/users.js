var express = require('express');
var router = express.Router();
var staticModels = require('../staticModels/planets');
const sqlite = require('sqlite3').verbose();
const models = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
