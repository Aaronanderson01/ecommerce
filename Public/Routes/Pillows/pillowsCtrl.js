angular.module('hiveApp').controller('pillowsCtrl',function($scope, $state, mainService){
  $scope.getPillows = function(){
  mainService.getProduct().then(function(res){
    console.log(res);
    $scope.pillows = res.data;
  });
  };
  $scope.getPillows();

  $scope.updateProduct =function(product){
    mainService.updateProduct(product).then(function(response) {
      console.log(response.data);
    });
  };
});
