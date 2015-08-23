define(['global/module'], function(module) {
    module.controller('globalContextController', [
        '$scope',
        '$route',
        '$q',
        'context',
        function($scope, $route, q, context) {

            var updateContext = function() {
                if ($route.current.title) {
                    context.title = $route.current.title;
                }
            };

            $scope.$on('$routeChangeSuccess', function() {
                if ($route.current) {
                    updateContext();
                }
            });

            $scope.context = context;

        }]
    );
});
