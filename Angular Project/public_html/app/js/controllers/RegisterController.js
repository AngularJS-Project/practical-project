'use strict';

app.controller('RegisterController', ['$scope', 'towns', 'userData', function($scope, townsData, userData) {
	townsData.getTowns()
		.$promise
		.then(function(data) {
			$scope.towns = data;
		});
                
        $scope.register = function(user) {
                userData.register(user);
	};
                
}]);