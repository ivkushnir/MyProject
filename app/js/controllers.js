'use strict';

/* Controllers */

var fsControllers = angular.module('fsControllers', []);

fsControllers.controller('fsListCtrl', ['$scope', '$http',
    function($scope, $http) {
        $http.get('folders_1/f1.json').success(function(data) {
            $scope.docs = data;
        });


    }]);

fsControllers.controller('fsDetailCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        $http.get('folders_1/' + $routeParams.docId + '.json').success(function(data) {
            $scope.docs = data;
        });
    }]);