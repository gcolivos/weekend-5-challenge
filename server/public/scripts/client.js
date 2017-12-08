var app = angular.module('RealEstateApp', ['ngRoute']);

app.config(function($routeProvider) {
    //route provider decides what views and controllers go together
    $routeProvider.when('/listings', {
        templateUrl: '/views/listings.html',
        controller: 'ListingsController as vm'
    }).when('/rentals', {
        templateUrl: '/views/rentals.html',
        controller: 'RentalsController as vm'
    }).when('/home', {
        redirectTo: '/'
    }).otherwise({
        template: '<h1>404</h1>'
    });
});