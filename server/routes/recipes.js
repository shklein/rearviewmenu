var express = require('express');
var router = express.Router();
var path = require('path');
var Recipe = require('../models/recipe');

router.get('/', function (req, res) {
  console.log(req.query.query);
  Recipe.find({ $or: [{ "title": req.query.query }, { "mainIngred": req.query.query }]}, function (err, recipes) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.send(recipes);
  });
});

router.post('/', function (req, res) {
  var recipe = new Recipe(req.body);
  recipe.save(function (err) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }

    res.sendStatus(201);
  });
});


module.exports = router;
