var express = require('express');
var router = express.Router();
var path = require('path');
var Recipe = require('../models/recipe');

router.get('/', function (req, res) {
  var searchTerm = {};
   if (req.query.title) {
    searchTerm = {"title": new RegExp(req.query.title, "i")};
    } else if (req.query.mainIngred) {
  searchTerm = {"mainIngred": new RegExp(req.query.mainIngred, "i")};
} else if (req.query.rating) {
   searchTerm = {"rating": req.query.rating};
 }

  Recipe.find(searchTerm, function (err, recipes) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.send(recipes);
  }).limit(50);
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
