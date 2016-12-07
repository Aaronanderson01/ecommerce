// INITILIZE DIRECTIVE
// ============================================================
angular.module("hiveApp").directive('carouselDir', function() {
  return {
    restrict: 'EA',
    templateUrl: './Public/Directives/carouselTmpl.html',
    controller: 'carouselCtrl'
  };
});
