app.service('ListingsService', ['$http', function($http){
    var self = this; //self refers to the service, NOT what is going on with the controller
    //inside the controller, self refers to the controller. Self is whatever it's inside of.

    self.listings = {list: [] }; //this is the other side of the company.controller 
    //reference of (self.companies=CompanyService.companies)

    self.newListing = {}; //need to bring along newCompany via controller and definie it so that you can
    // clear the fields below at the end of the addNewCompany call

    self.getListings = function () { //and then this is the section that refers to the AJAX request to
        //companies.js route, which then feeds into the database
        console.log("in getListings function in the right spot");
        $http({
            method: 'GET',
            url: '/listings'
        }).then(function (response) {
            console.log('response', response);
            self.listings.list = response.data;
        });
    };

    self.addNewListing = function (newListing) {
        console.log('addNewListing()',newListing)
        $http({
            method: 'POST',
            url: '/listings',
            data:  newListing
        }).then(function (response) {
            self.getListings();
            self.confirmation();
            self.newListing._id = '';
            self.newListing.cost = '';
            self.newListing.sqft = '';
            self.newListing.city = '';
        })
    };

    self.deleteListing = function (listing) {
        console.log(listing._id);
        $http({
            method: 'DELETE',
            url: '/listings/' + listing._id
        }).then(function (response) {
            console.log('response from the router', response);
            window.alert("Property deleted");
            self.getListings();
        });
    };

    self.getListings();

    self.confirmation = function() {
        window.alert("Property For Sale Added!")
    };
}]);