app.factory('userData', ['$resource', 'baseServiceUrl', 'userInformation', function($resource, baseServiceUrl, userInformation) {

        function registerUser(user) {
            return $resource(baseServiceUrl + 'user/register')
                    .save(user)
                    .$promise.then(function(data) {
                userInformation.saveUser(data);
                window.location.href = "#/login";
            }, function(error) {
                console.log(error.data.modelState);
            });
        }

	function loginUser() {
                //TODO
	}

	function logoutUser() {
                //TODO
	}

	return {
		register: registerUser,
		login: loginUser,
		logout: logoutUser
	};
}])