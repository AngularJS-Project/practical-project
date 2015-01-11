'use strict';

app.controller('TownControler', ['$scope', 'towns', function($scope, townsData) {
    townsData.getTowns()
            .$promise
            .then(function(data) {
                    $scope.towns = data;
            });
                
}]);