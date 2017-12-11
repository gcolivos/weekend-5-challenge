var express = require('express');
var router = express.Router();
var Listing = require('../models/listings.schema')

router.get('/', function (req, res) {
    // a get request for all listings
    console.log("In the get function. Req = " + req);
    Listing.find({}, function (errorMakingDatabaseQuery, data) {
        if (errorMakingDatabaseQuery) {
            console.log('error with listing find', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            console.log(data);
            res.send(data);
        }

    });
});

router.post('/', function (req, res) {
    console.log('/listings post')
    var listingToAdd = new Listing(req.body);
    listingToAdd.save(function (errorMakingDatabaseQuery, data) {
        if (errorMakingDatabaseQuery) {
            console.log('error', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }

    });
});

router.delete('/:id', function (req, res) {
    var listingToDeleteID = req.params.id; 
    console.log('/delete post, listingToDeleteID is equal to ' + listingToDeleteID);
    Listing.findByIdAndRemove(listingToDeleteID, function (errorMakingDatabaseQuery, data) {
        if (errorMakingDatabaseQuery) {
            console.log('error', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            console.log(listingToDeleteID + " successfully deleted")
            res.sendStatus(200);
        }
    })
});

// router.delete('/:id', function (req, res) {
//     var listingToDeleteID = req.params.id;
//     pool.connect(function (errorConnectingToDatabase, client, done) {
//         if (errorConnectingToDatabase) {
//             console.log('error', errorConnectingToDatabase);
//             res.sendStatus(500);
//         } else {
//             client.query(`DELETE FROM food WHERE id=$1;`, [foodToDeleteId],
//                 function (errorMakingDatabaseQuery, result) {
//                     done();
//                     if (errorMakingDatabaseQuery) {
//                         console.log('error', errorMakingDatabaseQuery);
//                         res.sendStatus(500);
//                     } else {
//                         res.sendStatus(200);
//                     }
//                 });
//         }
//     });
// });

module.exports = router;