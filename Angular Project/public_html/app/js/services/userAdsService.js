'use strict';

app.factory('userAdsService', ['$resource', 'baseServiceUrl', '$http', function($resource, baseServiceUrl) {
        var adsAuthDataUrl = baseServiceUrl + 'user/ads/:id';
        var adsAuthResource = $resource(adsAuthDataUrl, {id: '@id'}, {
            update: {
                method: 'PUT'
            }
        });

        function getAllUserAds() {
            return adsAuthResource.get();
        }

        function createNewAd(ad) {
            return adsAuthResource.save(ad);
        }

        function getAdById(id) {
            return adsAuthResource.get({id: id});
        }

        function editAd(id, ad) {
            return adsAuthResource.update({id: id}, ad);
        }

        function deleteAd(id) {
            return adsAuthResource.delete({id: id});
        }

        return {
            getUserAds: getAllUserAds,
            create: createNewAd,
            getById: getAdById,
            edit: editAd,
            delete: deleteAd
        };
    }
]);