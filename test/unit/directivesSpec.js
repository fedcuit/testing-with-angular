'use strict';

describe('directives', function () {
    beforeEach(module('myApp.directives'));

    describe('clearSearch', function () {
        it('should clear search box when click clear button', inject(function ($rootScope, $compile) {
            var html = '<input type="text"/><button type="button" clear-search>Clear</button>';
            var element = $compile(html)($rootScope);

            var val = spyOn(jQuery.fn, 'val');
            var prev = spyOn(jQuery.fn, 'prev');

            element.filter('input').val('some value');
            element.filter('button').trigger('click');

            expect(val).toHaveBeenCalled();
            expect(val.mostRecentCall.args[0]).toBe('');
        }));
    });

    describe('addFruit', function () {
        var $scope, element;
        beforeEach(inject(function ($rootScope, $compile) {
            $scope = $rootScope;      // default scope, think it as controller scope
            $scope.fruits = [];
            $scope.newFruit = 'apple';
            element = angular.element('<input type="text" ng-model="newFruit"/><button type="button" add-fruit fruits="fruits" new-fruit="newFruit">Add</button>');

            $compile(element)($rootScope);
        }));
        it('should add fruit to fruit list when click button', function () {
            element.filter('button').trigger('click');

            // test both default scope and isolated scope is updated
            expect(element.scope().fruits[0]).toBe('apple'); // use element.scope() to access isolated scope
            expect($scope.fruits[0]).toBe('apple');
        })
    });

    describe('addFruitDefault', function () {
        var $scope, element;
        beforeEach(inject(function ($rootScope, $compile) {
            $scope = $rootScope;
            $scope.fruits = [];
            $scope.newFruit = 'apple';

            element = angular.element('<input type="text" name="fruit" id="fruitDefault" ng-model="newFruit"/><button type="button" add-fruit-default>Add</button>');
            $compile(element)($scope);
        }));

        it('should add fruit to fruit list when click button', function () {
            element.filter('button').trigger('click');

            expect($scope.fruits[0]).toBe('apple');
        });
    });

    describe('readRight', function () {
        var $scope, element;
        beforeEach(inject(function ($rootScope, $compile) {
            $scope = $rootScope;
            element = angular.element('<button read-right>I know my rights</button>');

            $compile(element)($scope);
        }));

        it('should mark as right read when click button', function () {
            element.trigger('click');

            expect($scope.readRight).toBeTruthy();
        });
    })
});
