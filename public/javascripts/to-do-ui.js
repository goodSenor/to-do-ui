define([
    'angular',
    'ngRoute',
    'global'
], function(angular) {
    var app = angular.module("to-do-ui",
        [
            'ngRoute',
            'ngMessages',
            'global'
        ]
    );

    return app;
});
