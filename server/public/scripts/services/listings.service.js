app.service('ListingsService', ['$http', function($http){
    var self = this;

    self.listings = {list: [] }; 

    self.newListing = {}; 

    self.getListings = function () { 
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