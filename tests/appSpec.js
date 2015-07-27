define([
    'app',
    'topBar',
    'utils',
    'services',
    'echoContent',
    'opmlContent',
    'jquery',
    'sinon'
], function(app, topBar, utils, services, eCont, oCont, $, sinon) {
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
            opmlUrl = 'xml/subscription_manager.xml',
            server;

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

        beforeEach(function() {
            server = sinon.fakeServer.create();
        });

        afterEach(function() {
            server = sinon.fakeServer.restore();
        });

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
            var data = {
                    responseData: {
                        feed: {
                            author: '',
                            description: 'Description pending',
                            feedUrl: 'http://www.echojs.com/rss',
                            link: 'http://www.echojs.com',
                            title: 'Echo JS',
                            type: 'rss20',
                            entries: [{
                                author: '',
                                categories: [],
                                content: '<a href="http://www.echojs.com/news/15518">Comments</a>',
                                contentSnippet: 'Comments',
                                link: 'http://blog.couchbase.com/using-couchbase-in-your-ionic-framework-application-part-2',
                                publishedDate: '',
                                title: 'Using Couchbase in Your Ionic Framework Application Part 2'
                            }]
                        }
                    }
                },
                callback = null,
                firstCall = null;

            sinon.stub($, "ajax").yieldsTo("success", data);
            callback = sinon.stub(eCont, 'echoContent');
            services.parseRSS(rssObj.EchoJS, eCont.echoContent);
            expect(callback.calledOnce).toBe(true);
            firstCall = callback.firstCall;
            expect(firstCall.args[0].title).toBe("Echo JS");
            expect(firstCall.args[0].link).toBe("http://www.echojs.com");
            expect(firstCall.args[0].entries[0].link).toBe('http://blog.couchbase.com/using-couchbase-in-your-ionic-framework-application-part-2');
            expect(firstCall.args[0].entries[0].title).toBe('Using Couchbase in Your Ionic Framework Application Part 2');
        });

        it('Test services parseOpml function', function() {
            //services.parseOpml(opmlUrl, oCont.opmlContent);
            //expect(opmlMenu.childNodes.length).toBeGreaterThan(1);
        });
    });
});
