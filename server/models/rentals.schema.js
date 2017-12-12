var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a new Schema for game
// this will enforce our object properties

var rentalSchema = new Schema({
    rent: {type: Number},
    sqft: { type: Number},
    city: {type: String},
});

module.exports = mongoose.model('Rental', rentalSchema);