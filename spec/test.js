define(['app',
    'utils',
    'opmlContent',
    'echoContent',
    'services',
    'topBar'
], function(app, utils, opml, echo, services, topBar) {
    'use strict';

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
