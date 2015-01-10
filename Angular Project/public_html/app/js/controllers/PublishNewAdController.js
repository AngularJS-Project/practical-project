'use strict';

app.controller('PublishNewAdController', [
    '$scope', 'categories', 'towns', 'userAdsService', 'userInformation', '$http',
    function($scope, categories, towns, userAdsService, userInformation, $http) {
        $http.defaults.headers.common['Authorization'] = userInformation.authToken();

        categories.getAll().$promise.then(function(data) {
            $scope.categories = data;
        }, function(error) {
            console.log(error);
        });
        
        towns.getTowns()
                .$promise
                .then(function(data) {
            $scope.towns = data;
        }, function(error) {
            console.log(error);
        });

        $scope.fileSelected = function(fileInputField) {
            delete $scope.ad.imageDataUrl;
            var file = fileInputField.files[0];

            if (file.type.match(/image\/.*/)) {
                var reader = new FileReader();

                reader.onload = function() {
                    $scope.ad.imageDataURL = reader.result;
                    $("#image-box").html("<img src='" + reader.result + "'>");
                };

                reader.readAsDataURL(file);
            } else {
                $("#image-box").html("<p>File type not supported!</p>");
            }
        };

        $scope.publish = function(ad) {
            userAdsService.create(ad);
            alert('success');
        };
    }
]);