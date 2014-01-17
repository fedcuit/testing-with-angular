'use strict';

/* Directives */


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
    }]);
