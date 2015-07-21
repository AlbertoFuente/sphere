define([
    'app',
    'topBar',
    'utils',
    'services',
    'echoContent',
    'opmlContent',
    'jquery'
], function(app, topBar, utils, services, eCont, oCont, $) {
    'use strict';

    describe('Check Sphere App', function() {
        var logo = utils._create('a'),
            navContainer = utils._create('nav'),
            options = utils._create('ul'),
            echoContainer = utils._create('div'),
            echoMiniPanel = utils._create('div'),
            echoContentPanel = utils._create('div'),
            rowContainer = utils._create('div'),
            opmlContainer = utils._create('div'),
            opmlContent = utils._create('div'),
            opmlMenu = utils._create('div'),
            opmlVideo = utils._create('div'),
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
            },
            opmlUrl = 'xml/subscription_manager.xml';

        utils._setAttr(logo, 'class', 'brand-logo');
        utils._setAttr(navContainer, 'id', 'menuBar');
        utils._setAttr(options, 'id', 'nav-mobile');
        utils._setAttr(echoContainer, 'id', 'container');
        utils._setAttr(echoMiniPanel, 'id', 'echoMiniPanel');
        utils._setAttr(echoContentPanel, 'id', 'echoContentPanel');
        utils._setAttr(rowContainer, 'class', 'row');
        utils._setAttr(opmlContainer, 'id', 'opmlContainer');
        utils._setAttr(opmlContent, 'class', 'opmlContent');
        utils._setAttr(opmlMenu, 'id', 'opmlMenu');
        utils._setAttr(opmlVideo, 'id', 'opmlVideoContainer');

        window.document.body.appendChild(navContainer);
        utils._appendArr(navContainer, [logo, options]);

        window.document.body.appendChild(echoContainer);
        echoContainer.appendChild(rowContainer);
        utils._appendArr(rowContainer, [echoMiniPanel, echoContentPanel]);

        window.document.body.appendChild(opmlContainer);
        opmlContainer.appendChild(opmlContent);
        utils._appendArr(opmlContent, [opmlMenu, opmlVideo]);

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
            //expect(echoContentPanel.childNodes.length).toBeGreaterThan(1);
        });

        it('Test services parseOpml function', function() {
            services.parseOpml(opmlUrl, oCont.opmlContent);
        });
    });
});
