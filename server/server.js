var express = require('express');
var app = express();
var bodyParser = require('body-parser');
require('./modules/mongoose-connection');

var listing = require('./routes/listings')
var rental = require('./routes/rentals')

var port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('server/public'));

app.use('/listings', listing);
app.use('/rentals', rental);

app.listen(port, function(){
    console.log('listening on port', port);  
});