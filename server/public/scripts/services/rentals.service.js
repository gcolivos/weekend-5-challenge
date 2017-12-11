app.service('RentalsService', ['$http', function ($http) {
    var self = this; 

    self.rentals = { list: [] }; 

    self.newRental = {}; 

    self.getRentals = function () { 
        console.log("in getRentals function in the right spot");
        $http({
            method: 'GET',
            url: '/rentals'
        }).then(function (response) {
            console.log('response', response);
            self.rentals.list = response.data;
        });
    };

    self.addNewRental = function (newRental) {
        console.log('addNewRental()', newRental)
        $http({
            method: 'POST',
            url: '/rentals',
            data: newRental
        }).then(function (response) {
            self.getRentals();
            self.confirmation();
            self.newRental._id = '';
            self.newRental.rent = '';
            self.newRental.sqft = '';
            self.newRental.city = '';
        })
    };

    self.deleteRental = function (rental) {
        console.log(rental._id);
        $http({
            method: 'DELETE',
            url: '/rentals/' + rental._id
        }).then(function (response) {
            console.log('response from the router', response);
            window.alert("Rental property deleted");
            self.getRentals();
        });
    };


    self.getRentals();

    self.confirmation = function () {
        window.alert("Rental Property Added!")
    }
}]);