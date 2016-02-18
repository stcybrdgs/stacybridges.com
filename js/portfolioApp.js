/*
===================================================
  AngularJS Scripts for Chinese Notebook 
  2016, Stacy Bridges
===================================================
*/
// Angular.JS
var portfolioApp = angular.module('myPortfolio', ['ngRoute']);

// routing definitions
portfolioApp.config(function ($routeProvider) {
    $routeProvider
   .when('/p1-modal', {
       templateUrl: 'modals/p1-modal.html',
       controller: 'mainController'
   })    
   .when('/p2-modal', {
       templateUrl: 'modals/p2-modal.html',
       controller: 'mainController'
   })
   .when('/p3-modal', {
       templateUrl: 'modals/p3-modal.html',
       controller: 'mainController'
   })   
   .when('/p4-modal', {
       templateUrl: 'modals/p4-modal.html',
       controller: 'mainController'
   })   
   .when('/p5-modal', {
       templateUrl: 'modals/p5-modal.html',
       controller: 'mainController'
   })   
   .when('/p6-modal', {
       templateUrl: 'modals/p6-modal.html',
       controller: 'mainController'
   })   
   .when('/p7-modal', {
       templateUrl: 'modals/p7-modal.html',
       controller: 'mainController'
   })   
});

// controller
portfolioApp.controller('mainController', ['$scope', function ($scope) {
}]);
