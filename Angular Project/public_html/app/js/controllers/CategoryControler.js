'use strict';

app.controller('CategoryControler', ['$scope', '$rootScope' ,'categories', 'filter', function($scope, $rootScope, categories, filter) {

        categories.getAll()
                .$promise
                .then(function(data) {
            $scope.categories = data;
        }, function(error) {
            console.log(error);
        });

        $scope.categoryClicked = function categoryClicked (category){
            filter.filterByCategory(category);
            $rootScope.$broadcast('categoryClicked', category);
        };
}]);