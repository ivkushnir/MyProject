'use strict';

var fsApp = angular.module('fsApp', [
    'ngRoute',
    'fsControllers',
    'fsFilters'
]);

fsApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/folders_1', {
                templateUrl: 'partials/folder-list.html',
                controller: 'fsListCtrl'
            }).
            when('/folders_1/:docId', {
                templateUrl: 'partials/folder-next-list.html',
                controller: 'fsDetailCtrl'
            }).
            otherwise({
                redirectTo: '/folders_1'
            });
    }]);