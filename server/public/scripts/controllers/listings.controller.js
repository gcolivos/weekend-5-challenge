app.controller('ListingsController', ['ListingsService', function (ListingsService) {
    console.log("in the controller")
    var self = this;
    self.message = "Add A Property For Sale"
    self.listings = ListingsService.listings
    self.addNewListing = ListingsService.addNewListing;
    self.deleteListing = ListingsService.deleteListing;
}
]);