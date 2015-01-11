adsApp.directive('categories', function(){
    return {
        controller: 'CategoriesConrroller',
        restrict: 'E',
        templateUrl: 'templates/right-sidebar',
        replace: true
    }
});