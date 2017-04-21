angular.module('hiveApp').controller('mainCtrl', function($scope, mainService) {

    $scope.getShop = function() {
        mainService.getShop().then(function(response) {
            $scope.getShop = response.data;
        });
    };
    $scope.getShop();



});
