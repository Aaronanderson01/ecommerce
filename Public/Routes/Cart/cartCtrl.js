angular.module('hiveApp').controller('cartCtrl', function($scope, $state, mainService){
  $scope.login = function(path) {
    $state.go('login');
  };
});
