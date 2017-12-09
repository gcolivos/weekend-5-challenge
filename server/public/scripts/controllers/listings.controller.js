app.controller('ListingsController', ['ListingsService', function (ListingsService) {
    console.log("in the controller")
    var self = this;
    self.message = "Listing Controller Says Hello"
    self.listings = ListingsService.listings
}
]);