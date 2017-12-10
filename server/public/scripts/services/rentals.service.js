app.service('RentalsService', ['$http', function($http){
    var self = this; //self refers to the service, NOT what is going on with the controller
    //inside the controller, self refers to the controller. Self is whatever it's inside of.

    self.rentals = {list: [] }; //this is the other side of the company.controller 
    //reference of (self.companies=CompanyService.companies)

    self.newRental = {}; //need to bring along newCompany via controller and definie it so that you can
    // clear the fields below at the end of the addNewCompany call

    self.getRentals = function () { //and then this is the section that refers to the AJAX request to
        //companies.js route, which then feeds into the database
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
        console.log('addNewRental()',newRental)
        $http({
            method: 'POST',
            url: '/rentals',
            data:  newRental
        }).then(function (response) {
            self.getRentals();
            self.newRental._id = '';
            self.newRental.rent = '';
            self.newRental.sqft = '';
            self.newListing.city = '';
        })
    };

    self.getRentals();
    
}]);