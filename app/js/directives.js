'use strict';

angular.module('myApp.directives', []).
    directive('clearSearch', [function () {
        return {
            link: function (scope, element, attr) {
                var searchBox = element.prev();
                element.click(function () {
                    searchBox.val('');
                });
            }
        }
    }]).directive('addFruit',function () {
        return {
            scope: {
                fruits: '=',
                newFruit: '='
            },
            link: function (scope, element, attr) {
                element.click(function () {
                    scope.fruits.push(scope.newFruit);
                    scope.$apply();
                });
            }
        };
    }).directive('addFruitDefault',function () {
        return {
            link: function (scope, element, atrr) {
                element.click(function () {
                    scope.fruits.push(scope.newFruit);
                    scope.$apply();
                });
            }
        };
    }).directive('addFruitMethod',function () {
        return {
            link: function (scope, element, attr) {
                element.click(function () {
                    if (scope.isValid(scope.newFruit)) {
                        scope.fruits.push(scope.newFruit);
                        scope.$apply();
                    }
                });
            }
        };
    }).directive('addFruitMethodIsolated', function () {
        return {
            scope: {
                fruits: '=',
                newFruit: '=',
                isValid: '&'
            },
            link: function (scope, element, attr) {
                element.click(function () {
                    if (scope.isValid({name: scope.newFruit})) {
                        scope.fruits.push(scope.newFruit);
                        scope.$apply();
                    }
                });
            }
        };
    });
