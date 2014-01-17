'use strict';

describe('directives', function () {
    beforeEach(module('myApp.directives'));

    describe('clearSearch', function () {
        it('should clear search box when click clear button', inject(function ($rootScope, $compile) {
            var scope = $rootScope.$new();

            var html = '<input type="text"/><button type="button" clear-search></button>';
            var element = $compile(html)(scope);

            var val = spyOn(jQuery.fn, 'val');
            var prev = spyOn(jQuery.fn, 'prev');

            element.filter('input').val('some value');
            element.filter('button').trigger('click');

            expect(val).toHaveBeenCalled();

            expect(val.mostRecentCall.args[0]).toBe('');
        }));
    });
});
