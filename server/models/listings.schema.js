var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a new Schema for game
// this will enforce our object properties

var listingSchema = new Schema({
    _id: {type: String, required: true, unique: true},
    cost: {type: Number},
    sqft: { type: Number},
    city: {type: String},
    __v: {type: Number}
});

module.exports = mongoose.model('Listing', listingSchema);