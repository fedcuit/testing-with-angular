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
    });

});
