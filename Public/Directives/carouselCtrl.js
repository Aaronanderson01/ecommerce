// INITILIZE CONTROLLER
// ============================================================
angular.module("hiveApp").controller("carouselCtrl", function($scope) {

  var picArray = ['DSC_0087.JPG', 'IMG_6460.JPG', 'IMG_6549.JPG','IMG_6587.JPG', 'IMG_6673.JPG', 'IMG_9057.JPG'];


$scope.carousel = function(){
  $(document).ready(function(){
  $('.bxslider').bxSlider();
});
};
$scope.carousel();
});
