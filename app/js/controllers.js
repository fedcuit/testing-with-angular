'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
    controller('MyCtrl1', ['$scope', function ($scope) {
    }])
    .controller('MyCtrl2', [function () {
    }])
    .controller('FruitController', ['$scope', function ($scope) {
        $scope.init = function () {
            $scope.fruits = [];
        };
    }])
    .controller('DefaultFruitController', ['$scope', function ($scope) {
        $scope.init = function () {
            $scope.fruits = [];
        };
    }]);