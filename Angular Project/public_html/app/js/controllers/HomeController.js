'use strict';

app.controller('HomeController', function($scope, adsService, userInformation, filter) {
    $scope.title = "Home";
    
    function loadPublicAds(filterParams){
        filterParams = filterParams || {};
        adsService.getAds(filterParams, 
            function(data) {
                $scope.ads = data;
            },
            function(error) {
                console.log(error);
            }
        );
    }
        
    loadPublicAds();
        
    $scope.logout = function () {
         userInformation.removeUser();
         location.reload();
    };
    
    $scope.$on('categoryClicked', function(event,category){
        loadPublicAds(filter.getFilterParms());
    });
    
});

