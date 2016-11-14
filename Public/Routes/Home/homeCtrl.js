angular.module('hiveApp').controller('homeCtrl', function($scope, $state, $location){
  $scope.login = function(path) {
    $state.go('login');
  };

});
