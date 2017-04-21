angular.module('hiveApp').service('mainService', function($http, $q) {

    this.getProduct = function() {
        var dfd = $q.defer();
        $http.get('/api/products').then(function(res) {
            dfd.resolve(res);
        });
        return dfd.promise;
    };

    this.updateProduct = function(product) {
        return $http.put('/api/products', product).then(function(res) {
            return res;
        });
    };
    this.getProductById = function(id) {
        var dfd = $q.defer();
        $http.get('/api/products/' + id).then(function(res) {
            dfd.resolve(res);
        });
        return dfd.promise;
    };
    this.postAddress = function() {
        var dfd = $q.defer();
        $http.post('/api/addressList').then(function(res) {
            dfd.resolve(res);
        });
        return dfd.promise;
    };
    this.getShop = function() {
        return $http({
            method: 'GET',
            url: 'api/shop'

        })

        .then(function(response){
          console.log(response);
              return response;
            });
    };
this.getShopProducts = function(){
  return $http({
    method: 'GET',
    url: 'api/shop/products'
  });
};
});
