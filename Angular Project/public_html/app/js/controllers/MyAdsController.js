'use strict';

app.controller('MyAdsController', function($scope, $http, userAdsService, userInformation, $location) {
    $http.defaults.headers.common['Authorization'] = userInformation.authToken();

    $scope.publishAgain = function(id) {
        userAdsService.republish(id);
        $location.path('/user/ads');
    };

    $scope.deactivate = function(id) {
        userAdsService.deactivate(id);
        $location.path('/user/ads');
    };

    $scope.deleteAd = function(id) {
        $location.path('/user/ads/delete/' + id);
    };

    userAdsService.getUserAds().$promise.then(function(data) {
        $scope.ads = data;
    }, function(error) {
        console.log(error);
    });
});