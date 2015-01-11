'use strict';

app.controller('DeleteAdController', function($scope, $http, userAdsService, userInformation, $routeParams, $location, $rootScope) {
    $http.defaults.headers.common['Authorization'] = userInformation.authToken();

    var adId = $routeParams.id;

    $rootScope.pageTitle = 'Delete Ad';
    $scope.ad = userAdsService.getById(adId);

    $scope.deleteAd = function() {
        var id = $routeParams.id;
        userAdsService.delete(id);
        $location.path('/user/ads');
    };

    userAdsService.getUserAds().$promise.then(function(data) {
        $scope.ads = data;
    }, function(error) {
        console.log(error);
    });
});