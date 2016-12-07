// INITILIZE CONTROLLER
// ============================================================
angular.module("hiveApp").controller("carouselCtrl", function($scope) {

  var picArray = ['/img1.jpg', 'img2.jpg', 'img3.jpg'];


$scope.carousel = function(){
  $(document).ready(function(){
  $('.bxslider').bxSlider();
});
};
$scope.carousel();
});
