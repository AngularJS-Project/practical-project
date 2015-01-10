app.directive('sidebar', ['userInformation', function(userInformation) {
        var sidebar = 'guest-sidebar';

        if (userInformation.getUser()) {
            sidebar = 'left-sidebar';
        }

        return {
            restrict: 'E',
            controller: 'HomeController',
            templateUrl: './templates/sidebar/' + sidebar + '.html',
            replace: true
        };
    }
]);