angular.module('hiveApp').controller('productsCtrl', function($scope, $state, mainService){
// $scope.hide = hide;
// console.log(hide);
$scope.getShopProducts = function() {
  mainService.getShopProducts().then(function(response) {
    $scope.ShopProducts = response.data.results;
    console.log(response.data);
  });
};
$scope.getShopProducts();

});
