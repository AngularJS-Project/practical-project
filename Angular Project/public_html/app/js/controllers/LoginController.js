app.controller('LoginController', ['$scope', 'userData', 'userInformation',
    function($scope, userService, userInformation) {
        $scope.login = function(user) {
            userData.login(user);
        };
    }
]);