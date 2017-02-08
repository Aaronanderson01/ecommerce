angular.module('hiveApp').controller('homeCtrl', function($scope, $state, $location, hide){
$scope.hide = hide;
console.log(hide);
  /* When the user clicks on the button,
  toggle between hiding and showing the dropdown content */
//   $scope.myFunction = function() {
//       document.getElementById("myDropdown").classList.toggle("show");
//   };
//
//   // Close the dropdown menu if the user clicks outside of it
//   window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   };
//
$scope.toProducts = function(){

}
});
