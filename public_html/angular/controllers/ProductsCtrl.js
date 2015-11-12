ProductsApp.controller("ProductsCtrl", function($resource, $rootScope) {
  var Products = $resource('/products.json');
  this.get = function() {
    this.products = Products.query();
  };
  $rootScope.$on("products.updated", this.get.bind(this));
});
