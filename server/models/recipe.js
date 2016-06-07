var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var RecipeSchema = new Schema({
  title: { type: String},
  citation: {type: String},
  mainIngred: {type: String},
  rating: {type: Number},
  date_made: {type: Date},
  source: {type: String}

});

var Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;
