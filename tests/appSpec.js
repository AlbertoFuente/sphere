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
            echoCall = null,
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

        it('Test utils._isUnd function', function() {
            expect(utils._isUnd(undefined)).toBe(true);
        });

        it('Test utils._isNull function', function() {
            expect(utils._isNull(null)).toBe(true);
        });

        it('Test utils._setAttr function', function() {
            var element = utils._create('div');
            utils._setAttr(element, 'id', 'elementId');
            expect(element.id).toBe('elementId');
        });

        it('Test utils._appendArr function', function() {
            var container = utils._create('div'),
                link = utils._create('a'),
                text = utils._create('p');
            utils._appendArr(container, [link, text]);
            expect(container.childNodes.length).toBeGreaterThan(1);
        });

        it('Test utils._appendContent function', function() {
            var container = utils._create('div'),
                link = 'http://www.echojs.com/rss';
            utils._appendContent(container, link);
            expect(container.childNodes.length).toBeGreaterThan(0);
            expect(container.childNodes[0].tagName).toBe('OBJECT');
        });

        it('Test utils._emptyMenuContainer function', function() {
            var miniPanel = utils._getId('echoMiniPanel');
            utils._emptyMenuContainer();
            expect(miniPanel.childNodes.length).not.toBeGreaterThan(0);
        });

        it('Test utils._emptyContentContainer function', function() {
            var contentPanel = utils._getId('echoContentPanel');
            utils._emptyContentContainer();
            expect(contentPanel.childNodes.length).not.toBeGreaterThan(0);
        });

        it('Test utils._create function', function() {
            var element = utils._create('div');
            expect(element.tagName).toBe('DIV');
        });

        it('Test utils._getId function', function() {
            expect(utils._getId('menuBar')).toBe(navContainer);
        });

        it('Test utils._getClass function', function() {
            expect(utils._getClass('brand-logo')).toContain(logo);
        });

        it('Test utils._youtubeIfrm function', function() {
            var ifrm = utils._youtubeIfrm('http://www.echojs.com/');
            expect(ifrm.tagName).toBe('IFRAME');
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
            echoCall = callback.firstCall;

            expect(callback.calledOnce).toBe(true);
            expect(echoCall.args[0].title).toBe('Echo JS');
            expect(echoCall.args[0].link).toBe('http://www.echojs.com');
            expect(echoCall.args[0].entries[0].link).toBe('http://blog.couchbase.com/using-couchbase-in-your-ionic-framework-application-part-2');
            expect(echoCall.args[0].entries[0].title).toBe('Using Couchbase in Your Ionic Framework Application Part 2');

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
