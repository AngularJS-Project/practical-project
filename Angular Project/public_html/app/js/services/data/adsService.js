'use strict';

app.factory('adsService', ['$resource', 'baseServiceUrl', function($resource, baseServiceUrl) {
        var adsResource = $resource(baseServiceUrl + 'ads', null, {
            'getAll': {
                method: 'GET'
            }
        });

        return {
            getAds: function(filterParams, params, success, error) {
                return adsResource.getAll(filterParams, params, success, error);
            }
        };
    }
]);