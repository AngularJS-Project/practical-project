app.factory('userData', ['$resource', 'baseServiceUrl', 'userInformation', function($resource, baseServiceUrl, userInformation) {

        function registerUser(user) {
            return $resource(baseServiceUrl + 'user/register')
                    .save(user)
                    .$promise
                    .then(function(data) {
                userInformation.saveUser(data);
                localStorage.clear();
                showSuccessMessage('Successful Registration! Please login');
                window.location.href = "#/login";
            }, function(error) {
                showErrorMessage('error: ' + error.statusText);
                console.log(error.data.modelState);
            });
        }
        
        function loginUser(user) {
            return $resource(baseServiceUrl + 'user/login')
                    .save(user)
                    .$promise.then(function(data) {
                userInformation.saveUser(data);
                location.reload();
                showSuccessMessage('successful login');
                window.location.href = "#/home";
            }, function(error) {
                showErrorMessage('error: ' + error.statusText);
            });
        }

	function logoutUser() {
             
            return $resource(baseServiceUrl + 'user/logout')
                    .save(user)
                    .$promise
                    .then(function(data) {
                userInformation.removeUser(data);
        
            }, function(error) {
                showErrorMessage('error: ' + error.statusText);
            });
           
	}

	return {
		register: registerUser,
		login: loginUser,
		logout: logoutUser
	};
}])