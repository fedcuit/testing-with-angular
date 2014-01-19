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

    describe('addFruitMethod', function () {
        var $scope, element;
        beforeEach(inject(function ($rootScope, $compile) {
            $scope = $rootScope;
            $scope.fruits = [];
            $scope.newFruit = 'apple';
            $scope.isValid = new Function();

            element = angular.element('<input type="text" name="fruit" id="fruitDefault" ng-model="newFruit"/><button type="button" add-fruit-method>validate and add</button>');
            $compile(element)($scope);
        }));

        it('should add valid fruit to fruit list when click button', function () {
            var isValid = spyOn($scope, 'isValid').andReturn(true);

            element.filter('button').trigger('click');

            expect(isValid).toHaveBeenCalled();
            expect($scope.fruits[0]).toBe('apple');

        });

        it('should reject invalid fruit when click button', function () {
            var isValid = spyOn($scope, 'isValid').andReturn(false);

            element.filter('button').trigger('click');

            expect(isValid).toHaveBeenCalled();
            expect($scope.fruits.length).toBe(0);
        });
    });

    describe('addFruitMethodIsolated', function () {
        var $scope, element;
        beforeEach(inject(function ($rootScope, $compile) {
            $scope = $rootScope;
            $scope.fruits = [];
            $scope.newFruit = 'apple';
            $scope.isValid = angular.noop;

            element = angular.element('<input type="text" ng-model="newFruit"/>' +
                '<button type="button" add-fruit-method-isolated is-valid="isValid(name)" new-fruit="newFruit" fruits="fruits">validate and add</button>');

            $compile(element)($scope);
        }));

        it('should add valid fruit to fruit list when click button', function () {
            var isValid = spyOn($scope, 'isValid').andReturn(true);

            element.filter('button').trigger('click');

            expect(isValid).toHaveBeenCalled();
            expect(isValid.mostRecentCall.args[0]).toBe('apple');
            expect($scope.fruits[0]).toBe('apple');
        });
    });
});
