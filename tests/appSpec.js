define(['app', 'topBar', 'utils'], function(app, topBar, utils) {
    'use strict';

    describe('Check App module', function() {
        var logo = utils._create('a'),
            navContainer = utils._create('nav'),
            options = utils._create('ul');
        utils._setAttr(logo, 'class', 'brand-logo');
        utils._setAttr(navContainer, 'id', 'menuBar');
        utils._setAttr(options, 'id', 'nav-mobile');
        utils._appendArr(window.document.body, [navContainer, logo, options]);

        it('Init App', function() {
            expect(app.init).toBeDefined();
            app.init();
        });

        it('Test topBar module', function() {
            var menuOptions = {
                op1: 'EchoJS',
                op2: 'Javascript',
                op3: 'DailyJS',
                op5: 'jsRocks',
                op6: 'FrontEndLabs',
                op7: 'infoWorld',
                op8: 'SitePoint',
                op9: 'Telerik',
                op10: 'cNet',
                op11: 'infoQ'
            };
            // top bar
            topBar.insertTitle('Sphere');
            expect(logo.innerHTML).toEqual('Sphere');
            //topBar.insertTitle.prototype.insertMenu(menuOptions);
            //expect(options.childNodes.length).toBeGreaterThan(1);
        });
    });
});
