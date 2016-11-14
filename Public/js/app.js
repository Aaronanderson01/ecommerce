var app = angular.module("hiveApp", ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('home');

  $stateProvider

  .state('home', {
    url: '/home',
    templateUrl: './Public/Routes/home/homeTmpl.html',
    controller: 'homeCtrl'
  })
  .state('products', {
  url: '/products',
  templateUrl: './Public/Routes/Products/productsTmpl.html',
  controller: 'productsCtrl'
})
  .state('productDetails', {
    url: '/productDetails',
    templateUrl: './Public/Routes/productDetails/productDetailsTmpl.html',
    controller:('productDetailsCtrl')
  })
  .state('cart', {
    url:'/cart',
    templateUrl: './Public/Routes/Cart/cartTmpl.html',
    controller: 'cartCtrl'
  })
  .state('customer', {
    url: '/customer',
    templateUrl: './Public/Routes/Customer/customerTmpl.html',
    controller: 'customerCtrl'
  })
  .state('login', {
    url: '/login',
    templateUrl: './Public/Routes/Login/loginTmpl.html',
    controller: 'loginCtrl'
  })
  .state('about', {
    url: '/about',
    templateUrl: '/Public/Routes/About/aboutTmpl.html',
    controller: 'aboutCtrl'
  });

});
