define([
    'jquery',
    'app',
    'topBar',
    'services',
    'echoContent',
    'opmlContent',
    'utils',
    'sinon'
], function($, app, topBar, services, eCont, oCont, utils, sinon) {
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
            data = {
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
            firstCall = null,
            XMLdata = {
                childNodes: {
                    opml: {
                        childNodes: {
                            text: {},
                            body: {
                                childNodes: {
                                    outline: {
                                        attributes: {
                                            text: {
                                                value: 'Suscripciones de YouTube'
                                            }
                                        },
                                        childNodes: {
                                            outline: {
                                                nodeName: 'outline',
                                                outerHTML: '<outline text="Madrid JS Meetup" title="Madrid JS Meetup" type="rss" xmlUrl="https://www.youtube.com/feeds/videos.xml?channel_id=UCl6PWnh77qmFkuRwVwkv67g"/>'
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            opmlCall = null;

        utils._setAttr(logo, 'class', 'brand-logo');
        utils._setAttr(navContainer, 'id', 'menuBar');
        utils._setAttr(options, 'id', 'nav-mobile');
        utils._setAttr(echoContainer, 'id', 'container');
        utils._setAttr(echoContainer, 'class', 'row');
        utils._setAttr(echoMiniPanel, 'id', 'echoMiniPanel');
        utils._setAttr(echoMiniPanel, 'class', 'col s2 echoMenu');
        utils._setAttr(echoContentPanel, 'id', 'echoContentPanel');
        utils._setAttr(echoContentPanel, 'class', 'col s10 echoContent');
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
            this.server = sinon.fakeServer.create();
        });

        afterEach(function() {
            this.server = sinon.fakeServer.restore();
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
            sinon.stub($, 'ajax').yieldsTo('success', data);
            callback = sinon.stub(eCont, 'echoContent');
            services.parseRSS(rssObj.EchoJS, eCont.echoContent);
            firstCall = callback.firstCall;

            expect(callback.calledOnce).toBe(true);
            expect(firstCall.args[0].title).toBe('Echo JS');
            expect(firstCall.args[0].link).toBe('http://www.echojs.com');
            expect(firstCall.args[0].entries[0].link).toBe('http://blog.couchbase.com/using-couchbase-in-your-ionic-framework-application-part-2');
            expect(firstCall.args[0].entries[0].title).toBe('Using Couchbase in Your Ionic Framework Application Part 2');

            eCont.echoContent.restore();
            $.ajax.restore();
        });

        it('Test services parseOpml function', function() {
            sinon.stub($, 'ajax').yieldsTo('success', XMLdata);
            callback = sinon.stub(oCont, 'opmlContent');
            services.parseOpml(opmlUrl, oCont.opmlContent);
            opmlCall = callback.firstCall;

            expect(callback.calledOnce).toBe(true);
            expect(opmlCall.args[0].childNodes.opml.childNodes.body.childNodes.outline.attributes.text.value).toBe('Suscripciones de YouTube');
            expect(opmlCall.args[0].childNodes.opml.childNodes.body.childNodes.outline.childNodes.outline.nodeName).toBe('outline');
            expect(opmlCall.args[0].childNodes.opml.childNodes.body.childNodes.outline.childNodes.outline.outerHTML).toBe(
                '<outline text="Madrid JS Meetup" title="Madrid JS Meetup" type="rss" xmlUrl="https://www.youtube.com/feeds/videos.xml?channel_id=UCl6PWnh77qmFkuRwVwkv67g"/>'
            );

            oCont.opmlContent.restore();
            $.ajax.restore();
        });
    });
});
