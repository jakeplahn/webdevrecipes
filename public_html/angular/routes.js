var ProductsApp = angular.module("products", ["ngResource", "ngRoute"]);
ProductsApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider,
    when("/", { controller: "ProductsCtrl" }).
    otherwise({ redirectTo: "/" });
}]);
