angular.module('hiveApp').controller('loginCtrl', function($scope, $state, mainService){
$scope.addressList = function(){
  mainService.postAddress()
  .then(function(res){
    $scope.address = res.data;
    console.log(res.data);
  });
};
$scope.addressList();
});
