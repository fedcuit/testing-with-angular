'use strict';

describe('controllers', function(){
  beforeEach(module('myApp.controllers'));

    describe('FruitController', function () {
        var scope = {};
        beforeEach(inject(function($rootScope, $controller){
            scope = $rootScope.$new();
            $controller('FruitController', {
                $scope: scope
            });
        }));

        it('should init fruit list', function() {
            scope.init();

            expect(scope.fruits).toEqual([]);
        });

        it('should be valid given fruit name only contains letter', function() {
            var isValid = scope.isValid('apple');

            expect(isValid).toBeTruthy();
        });

        it('should be invalid given fruit name contains other character', function() {
            var isValid = scope.isValid('apple-');

            expect(isValid).toBeFalsy();
        });
    });

});
