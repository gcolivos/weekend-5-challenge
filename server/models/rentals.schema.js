var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a new Schema for game
// this will enforce our object properties

var rentalSchema = new Schema({
    _id: {type: String, required: true, unique: true},
    rent: {type: Number},
    sqft: { type: Number},
    city: {type: String},
    __v: {type: Number}
});

module.exports = mongoose.model('Rental', rentalSchema);