app.factory('userData', ['$resource', 'baseServiceUrl', 'userInformation', function($resource, baseServiceUrl, userInformation) {

        function registerUser(user) {
            return $resource(baseServiceUrl + 'user/register')
                    .save(user)
                    .$promise
                    .then(function(data) {
                userInformation.saveUser(data);
                //window.location.href = "#/login";
            }, function(error) {
                alert('error');
                console.log(error.data.modelState);
            });
        }
        
        function loginUser(user) {
            return $resource(baseServiceUrl + 'user/login')
                    .save(user)
                    .$promise.then(function(data) {
                userInformation.saveUser(data);
            });
        }

	function logoutUser() {
             
            return $resource(baseServiceUrl + 'user/logout')
                    .save(user)
                    .$promise
                    .then(function(data) {
                userInformation.removeUser(data);
        
            }, function(error) {
                alert('error');
                console.log(error.data.modelState);
            });
           
	}

	return {
		register: registerUser,
		login: loginUser,
		logout: logoutUser
	};
}])