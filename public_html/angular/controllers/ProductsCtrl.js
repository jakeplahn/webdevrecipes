ProductsApp.controller("ProductsCtrl", function($resource, $rootScope) {
  var Products = $resource('/products.json');
  this.get = function() {
    this.products = Products.query();
  };
  $rootScope.$on("products.updated", this.get.bind(this));
});

ProductsApp.controller("ProductCtrl", function($resource, $routeParams) {
  var Product = $resource('/products/:id.json', { id: "@id" });
  this.product = Product.get({ id: $routeParams.id });
});
