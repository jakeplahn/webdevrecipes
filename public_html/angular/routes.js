var ProductsApp = angular.module("products", ["ngResource", "ngRoute"]);

ProductsApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when("/", { controller: "ProductsCtrl" }).
    when("/products/:id", {
      controller:  "ProductCtrl as productCtrl",
      templateUrl: "/templates/show.html"
    }).
    otherwise({ redirectTo: "/" });
}]);
