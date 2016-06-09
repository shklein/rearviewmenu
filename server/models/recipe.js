var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var RecipeSchema = new Schema({
  title: { type: String},
  citation: {type: String},
  mainIngred: {type: Array},
  rating: {type: Number},
  date_made: {type: String},
  source: {type: String}

});

var Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;
