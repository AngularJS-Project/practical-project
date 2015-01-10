app.factory('userInformation', function() {
    
        function saveUserData(data) {
            localStorage.setItem('user', angular.toJson(data));
        }

        function getUserData(data) {
		//TODO
	}

	function removeUserData() {
		//TODO
	}

	return {
		saveUser: saveUserData,
                getUser: getUserData,
                removeUser: removeUserData
	}
})