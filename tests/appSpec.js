define(['app', 'topBar', 'utils', 'services', 'echoContent'], function(app, topBar, utils, services, eCont) {
    'use strict';

    describe('Check Sphere App', function() {
        var logo = utils._create('a'),
            navContainer = utils._create('nav'),
            options = utils._create('ul'),
            echoContainer = utils._create('div'),
            echoMiniPanel = utils._create('div'),
            echoContentPanel = utils._create('div'),
            rowContainer = utils._create('div'),
            menuOptions = {
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
            },
            rssObj = {
                EchoJS: 'http://www.echojs.com/rss'
            };

        utils._setAttr(logo, 'class', 'brand-logo');
        utils._setAttr(navContainer, 'id', 'menuBar');
        utils._setAttr(options, 'id', 'nav-mobile');
        utils._setAttr(echoContainer, 'id', 'container');
        utils._setAttr(echoMiniPanel, 'id', 'echoMiniPanel');
        utils._setAttr(echoContentPanel, 'id', 'echoContentPanel');
        utils._setAttr(rowContainer, 'class', 'row');

        window.document.body.appendChild(navContainer);
        utils._appendArr(navContainer, [logo, options]);

        window.document.body.appendChild(echoContainer);
        echoContainer.appendChild(rowContainer);
        utils._appendArr(rowContainer, [echoMiniPanel, echoContentPanel]);

        it('Init App', function() {
            expect(app.init).toBeDefined();
            app.init();
        });

        it('Test topBar module title', function() {
            topBar.insertTitle('Sphere');
            expect(logo.innerHTML).toEqual('Sphere');
        });

        it('Test topBar menu options', function() {
            topBar.insertTitle.prototype.insertMenu(menuOptions);
            expect(options.childNodes.length).toBeGreaterThan(1);
        });

        it('Test services parseRSS function', function() {
            services.parseRSS(rssObj.EchoJS, eCont.echoContent);
            //expect(echoMiniPanel.childNodes.length).toBeGreaterThan(1);
        });
    });
});
