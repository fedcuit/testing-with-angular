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
    }]).directive('readRight',function () {
        return {
            link: function (scope, element, attr) {
                element.click(function () {
                    scope.readRight = true;
                });
            }
        };
    }).directive('addFruit', function () {
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
    }).directive('addFruitDefault', function() {
        return {
          link: function(scope, element, atrr) {
              element.click(function () {
                  scope.fruits.push(scope.newFruit);
                  scope.$apply();
              });
          }
        };
    });
