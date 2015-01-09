'use strict';

app.controller('HomeController', function($scope, $rootScope, adsService, pageSize) {
    $scope.title = "Home";
    adsService.getAds(null,
            function(data) {
                $scope.ads = data;
            },
            function(error) {
                alert("failed");
            }
    );
});

