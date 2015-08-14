require.config({
    paths: {
        'text': 'common/lib/requireJs/text',
        'async': 'common/lib/requireJs/async',
        'goog': 'common/lib/requireJs/goog',
        'css': 'common/lib/requireJs/css',
        'propertyParser': 'common/lib/requireJs/propertyParser',
        'angular': '../lib/angular/angular.min',
        'angular-messages': '../lib/angular-messages/angular-messages.min',
        'angular-sanitize': '../lib/angular-sanitize/angular-sanitize.min',
        'cgBusy': '../lib/angular-busy/dist/angular-busy',
        'ngRoute': '../lib/angular-route/angular-route.min',
        'angular-bootstrap': '../lib/angular-bootstrap/ui-bootstrap.min',
        'jquery': '../lib/jquery/jquery.min',
        'underscore': '../lib/underscore/underscore-min',
        'moment': '../lib/moment/moment',
        'tv4': '../lib/tv4/tv4',
        'ObjectPath': '../lib/objectpath/lib/ObjectPath',
        'angular-schema-form': '../lib/angular-schema-form/dist/schema-form'
    },
    waitSeconds: 60,
    packages: [
        { name: 'config',                   location: 'config' },
        { name: 'keywords',                 location: 'keywords' },
        { name: 'profiles',                 location: 'profiles' },
        { name: 'websites',                 location: 'websites' },
        { name: 'attributes',               location: 'attributes' },
        { name: 'corp',                     location: 'corp' },
        { name: 'fma',                      location: 'fma' },
        { name: 'user',                     location: 'user' },
        { name: 'client',                   location: 'client' },
        { name: 'global',                   location: 'global' },
        { name: 'common',                   location: 'common' },
        { name: 'yext',                     location: 'yext' },
        { name: 'schema-form-decorators',   location: 'schema-form-decorators' },
        { name: 'application-settings',     location: 'application-settings' }
    ],
    shim: {
        'angular': {
            exports: 'angular',
            deps: ['jquery']

        },
        'angular-messages': ['angular'],
        'angular-sanitize': ['angular'],
        '../lib/angular-bootstrap/ui-bootstrap-tpls.min': ['angular'],
        'angular-bootstrap': ['angular'],
        'angular-schema-form': ['angular', 'angular-sanitize', 'ObjectPath', 'tv4'],
        'cgBusy': ['angular'],
        'schema-form-decorators': ['angular-schema-form'],
        'ngRoute': ['angular']
    }
});

require(
    [
        'angular',
        'client-management-ui',
        'angular-bootstrap',
        'angular-schema-form',
        'css!../lib/bootstrap/dist/css/bootstrap.min.css',
        'css!common/layout/structure.css',
        'css!common/layout/core.css',
        '../lib/angular-bootstrap/ui-bootstrap-tpls.min',
        'cgBusy',
        'angular-messages',
        'schema-form-decorators',
        'jquery',
        'underscore',
    ],
    function(angular, clientManagementUi, yb, schemaForm) {
        angular.bootstrap(document.documentElement, [clientManagementUi.name, 'ui.bootstrap', 'schemaForm', 'cgBusy']);
    }
);
