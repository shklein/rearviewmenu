var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var DateSchema = require('./date').schema;


var RecipeSchema = new Schema({
  title: { type: String},
  citation: {type: String},
  mainIngred: {type: String},
  rating: {type: Number},
  date_made: [DateSchema],
  source: {type: String}

});

var Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;
