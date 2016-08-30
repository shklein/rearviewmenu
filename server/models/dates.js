var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DateSchema = new Schema({
  date_made: { type: String, required: true },
});

var Date = mongoose.model('Date', DateSchema);

module.exports = Date;
