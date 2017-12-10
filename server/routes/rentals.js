var express = require('express');
var router = express.Router();
var Rental = require('../models/rentals.schema')

router.get('/', function (req, res) {
    // a get request for all listings
    console.log("In the get function. Req = " + req);
    Rental.find({}, function (errorMakingDatabaseQuery, data) {
        if (errorMakingDatabaseQuery) {
            console.log('error with rental find', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            console.log(data);
            res.send(data);
        }

    });
});

router.post('/', function (req, res) {
    console.log('/rentals post')
    var rentalToAdd = new Rental (req.body);

  rentalToAdd.save(function(errorMakingDatabaseQuery,data){
        if (errorMakingDatabaseQuery) {
            console.log('error', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }

    });
});

module.exports = router;