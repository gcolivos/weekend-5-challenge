app.controller('RentalsController', ['RentalsService', function (RentalsService) {
    console.log("in the controller")
    var self = this;
    self.message = "Add A Property For Rent";
    self.rentals = RentalsService.rentals;
    self.addNewRental = RentalsService.addNewRental;
}
]);