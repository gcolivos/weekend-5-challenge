var express = require('express');
var router = express.Router();
var Listing = require('../models/listings.schema')

router.get('/', function (req, res) {
    // a get request for all listings
    console.log("In the get function. Req = " + req);
    Listing.find({}, function (errorMakingDatabaseQuery, data) {
        if (errorMakingDatabaseQuery) {
            console.log('error with game find', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            console.log(data);
            res.send(data);
        }

    });
});

module.exports = router;