'use strict';

app.controller('HomeController', function($scope, adsService, userInformation) {
    $scope.title = "Home";
    adsService.getAds(null,
            function(data) {
                $scope.ads = data;
            },
            function(error) {
                console.log(error);
            }
    );
    
    $scope.logout = function () {
         userInformation.removeUser();
         location.reload();
    };
    
});

