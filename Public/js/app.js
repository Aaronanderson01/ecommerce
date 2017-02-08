var app = angular.module("hiveApp", ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('home');

  $stateProvider

  .state('home', {
    url: '/home',
    templateUrl: './Public/Routes/home/homeTmpl.html',
    controller: 'homeCtrl',
    resolve: {
      hide: function(){
        return false;
      }
    }
  })
  .state('products', {
  url: '/products',
  templateUrl: './Public/Routes/Products/productsTmpl.html',
  controller: 'productsCtrl'
  // resolve: {
  //   hide: function(){
  //     return false;
  //   }
  // }
})
  .state('productDetails', {
    url: '/productDetails/:id',
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
  })
  .state('contact', {
    url: '/contact',
    templateUrl: '/Public/Routes/Contact/contactTmpl.html',
    controller: 'contactCtrl'
  })
  .state('pillows', {
    // parent: 'products',
    url: '/pillows',
    templateUrl: '/Public/Routes/Pillows/pillowsTmpl.html',
    controller: 'pillowsCtrl'
  })
  .state('weavings', {
    // parent:'products',
    url: '/weavings',
    templateUrl: '/Public/Routes/Weavings/weavingsTmpl.html',
    controller: 'weavingsCtrl'
  })
  .state('rugs', {
    // parent:'products',
    url: '/rugs',
    templateUrl: '/Public/Routes/Rugs/rugsTmpl.html',
    controller: 'rugsCtrl'
  });

});
