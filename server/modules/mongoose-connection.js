function connect() {
    
        var mongoose = require('mongoose');
    
        var databaseUrl = 'mongodb://localhost:27017/realestate';
        mongoose.connect(databaseUrl);
    
        mongoose.connection.on('connected', function () {
            console.log('mongoose connected to :', databaseUrl);
        })
    
        mongoose.connection.on('error', function (err) {
            console.log('mongoose connection error', err)
        })
    }
    
    module.exports = {
        connect: connect
    };