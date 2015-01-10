app.controller('LoginController', ['$scope', 'userData', 'userInformation',
    function($scope, userData, userInformation) {
        $scope.login = function(user) {
            userData.login(user);
        };
        $scope.title = "Login";
    }
]);