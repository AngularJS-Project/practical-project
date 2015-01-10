'use strict';

app.controller('MyAdsController', function($scope, $http, userAdsService, userInformation) {
    $http.defaults.headers.common['Authorization'] = userInformation.authToken();

    userAdsService.getUserAds().$promise.then(function(data) {
        $scope.ads = data;
    }, function(error) {
        console.log(error);
    });
});