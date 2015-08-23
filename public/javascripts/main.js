require.config({
    paths: {
        'text': 'common/lib/requireJs/text',
        'async': 'common/lib/requireJs/async',
        'goog': 'common/lib/requireJs/goog',
        'css': 'common/lib/requireJs/css',
        'propertyParser': 'common/lib/requireJs/propertyParser',
        'angular': '../lib/angular/angular.min',
        'angular-messages': '../lib/angular-messages/angular-messages.min',
        'cgBusy': '../lib/angular-busy/dist/angular-busy',
        'ngRoute': '../lib/angular-route/angular-route.min',
        'angular-bootstrap': '../lib/angular-bootstrap/ui-bootstrap.min',
        'jquery': '../lib/jquery/jquery.min',
        'underscore': '../lib/underscore/underscore-min'
    },
    packages: [
        { name: 'global',                   location: 'global' }
    ],

    waitSeconds: 60,
    shim: {
        'angular': {
            exports: 'angular',
            deps: ['jquery']

        },
        'angular-messages': ['angular'],
        'angular-sanitize': ['angular'],
        '../lib/angular-bootstrap/ui-bootstrap-tpls.min': ['angular'],
        'angular-bootstrap': ['angular'],
        'cgBusy': ['angular'],
        'ngRoute': ['angular']
    }
});

require(
    [
        'angular',
        'to-do-ui',
        'angular-bootstrap',
        '../lib/angular-bootstrap/ui-bootstrap-tpls.min',
        'cgBusy',
        'angular-messages',
        'jquery',
        'underscore'
    ],
    function(angular, toDoUi) {
        angular.bootstrap(document.documentElement, [toDoUi.name, 'ui.bootstrap', 'cgBusy']);
    }
);
