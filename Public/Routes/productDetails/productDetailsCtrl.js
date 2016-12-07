angular.module('hiveApp').controller('productDetailsCtrl', function($scope,$state, mainService){
   var id = $state.params.id;
   console.log(id);
   $scope.getProductById = function(){
     mainService.getProductById(id).then(function(response){
       $scope.product = response.data[0];
     });
   };
$scope.getProductById();

});
