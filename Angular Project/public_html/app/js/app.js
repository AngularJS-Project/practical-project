'use strict';
 
var app = angular.module('app', ['ngRoute', 'ngResource']);

app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net/api/');
app.constant('pageSize', 2);

app.config(['$routeProvider', function($routeProvider) {
       $routeProvider.when('/', {
          templateUrl: 'templates/home.html',
          controller: 'HomeController'
       });
       $routeProvider.when('/login', {
          templateUrl: 'templates/login.html',
          controller: 'LoginController'
       });
       $routeProvider.when('/register', {
          templateUrl: 'templates/register.html',
          controller: 'RegisterController'
       });
       
       $routeProvider.when('/logout', {
            templateUrl: 'templates/user/newad.html',
            controller: 'LohouthController'
       });
       
       $routeProvider.when('/user/ads/publish', {
            templateUrl: 'templates/user/push-new-ads.html',
            controller: 'PublishNewAdController'
       });
       
        $routeProvider.when('/user/ads/delete/:id', {
            templateUrl: 'templates/user/delete-ads.html',
            controller: 'DeleteAdController'
        });
       
        $routeProvider.when('/user/ads/myAds', {
            templateUrl: 'templates/user/my-ads.html',
            controller: 'MyAdsController'
        });
       
       $routeProvider.otherwise({
           redirectTo: '/'
       });
    }
    
]);
function showErrorMessage(msg) {
    noty({
            text: msg,
            type: 'error',
            layout: 'topCenter',
            timeout: 5000}
    );
}

function showSuccessMessage(msg) {
    noty({
            text: msg,
            type: 'success',
            layout: 'topCenter',
            timeout: 5000}
    );
}