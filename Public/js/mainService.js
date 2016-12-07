angular.module('hiveApp').service('mainService', function($http, $q){

this.getProduct = function(){
var dfd = $q.defer();
$http.get('/api/products').then(function(res){
  dfd.resolve(res);
});
return dfd.promise;
};

this.updateProduct = function(product){
  return $http.put('/api/products', product).then(function(res){
    return res;
  });
};
this.getProductById = function(id){
  var dfd = $q.defer();
  $http.get('/api/products/'+ id).then(function(res){
    dfd.resolve(res);
  });
  return dfd.promise;
};

});
