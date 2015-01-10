'use strict';

app.factory('towns', ['$resource', 'baseServiceUrl', function($resource, baseServiceUrl) {
	var resource = $resource(baseServiceUrl + 'towns')
	function getAllTowns() {
		return resource.query();
	}
	return {
		getTowns: getAllTowns
	};
}])



