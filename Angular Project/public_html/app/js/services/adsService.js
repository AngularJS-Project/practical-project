'use strict';

app.factory('adsService', ['$resource', 'baseServiceUrl', function($resource, baseServiceUrl) {
	var adsResource = $resource(
			baseServiceUrl + '/api/ads', 
			null, 
			{
				'getAll': {method: 'GET'}
			}
			);
	return {
		getAds: function(params, success, error) {
			return adsResource.getAll(params, success, error);
		}
	}
}]);

app.factory('categoriesService', function($resource, baseServiceUrl) {
	return {
		//TODO: get all categories
	};
});

app.factory('townsService', ['$resource', 'baseServiceUrl', function($resource, baseServiceUrl) {
	var townsResource = $resource(baseServiceUrl + 'towns');
	function getAllTowns() {
		return townsResource.query();
	}
	return {
		getTowns: getAllTowns
	};
}]);