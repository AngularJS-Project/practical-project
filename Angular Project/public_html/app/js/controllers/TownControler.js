'use strict';

app.controller('TownControler', ['$scope', '$rootScope', 'towns', 'filter' , function($scope, $rootScope, townsData, filter) {
    townsData.getTowns()
            .$promise
            .then(function(data) {
                    $scope.towns = data;
            });
            
            
            $scope.townClicked = function townClicked (town){
                filter.filterByCategory(town);
                $rootScope.$broadcast('townClicked', town);
            };
 
}]);