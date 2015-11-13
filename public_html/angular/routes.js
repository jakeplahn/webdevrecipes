var ProductsApp = angular.module("products", ["ngResource", "ngRoute"]);

ProductsApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when("/", { controller: "ProductsCtrl" }).
    when("/products/:id", {
      controller:  "ProductCtrl as productCtrl",
      templateUrl: "/angular/templates/show.html"
    }).
    when("/products/new", {
      controller: "ProductNewCtrl as productFormCtrl",
      templateUrl: "/angular/templates/form.html"
    }).
    when("/products/:id/edit", {
      controller: "ProductEditCtrl as productFormCtrl",
      templateUrl: "/angular/templates/form.html"
    }).
    otherwise({ redirectTo: "/" });
}]);
