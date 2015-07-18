define(['app'], function(app) {
    'use strict';

    describe('Check App module', function() {
        it('Init App', function() {
            beforeEach(function() {
                spyOn(app, 'init').andCallThrough();
            });

            it("APP should be able to initialize", function() {
                expect(app.init).toBeDefined();
                app.init();
                expect(app.init).toHaveBeenCalled();
            });
        });
    });
});
