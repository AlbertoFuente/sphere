define(['topBar', 'echoContent', 'infoContent', 'services', 'utils'], function(topBar, eCont, iCont, services, utils) {
    'use strict';

    var infoWorld = 'http://www.infoworld.com/news/index.rss',
        echoJS = 'http://www.echojs.com/rss',
        dailyJS = 'http://dailyjs.com/rss/',
        fiveJS = 'https://fivejs.codeschool.com/feed.rss',
        jsRocks = 'http://jsrocks.org/rss',
        frontEndLabs = 'http://frontendlabs.io/feed',
        javascript = 'https://www.javascript.com/feed/rss',
        _init = function() {
            var menuOptions = {
                op1: 'EchoJS',
                op2: 'Javascript',
                op3: 'DailyJS',
                op4: 'FiveJS',
                op5: 'jsRocks',
                op6: 'FrontEndLabs',
                op7: 'infoWorld'
            };
            // top bar
            topBar.upMenu('Sphere');
            topBar.upMenu.prototype.insertTitle();
            topBar.upMenu.prototype.insertMenu(menuOptions);
            // post content (echoJS)
            services.parseRSS(echoJS, eCont.echoContent);
            // EVENTS
            $('.topBarLink').click(function() {
                var elemId = $(this)[0].id;
                _changeChannel(elemId);
            });
        },
        // TOP MENU EVENTS
        _changeChannel = function(data) {
            if (!utils._isUnd(data)) {
                switch (data) {
                    case 'EchoJS':
                        utils._emptyMenuContainer();
                        utils._emptyContentContainer();
                        services.parseRSS(echoJS, eCont.echoContent);
                        break;
                    case 'Javascript':
                        break;
                    case 'DailyJS':
                        break;
                    case 'FiveJS':
                        break;
                    case 'jsRocks':
                        break;
                    case 'FrontEndLabs':
                        break;
                    case 'infoWorld':
                        utils._emptyMenuContainer();
                        utils._emptyContentContainer();
                        services.parseRSS(infoWorld, iCont.infoContent);
                        break;
                    default:
                        utils._emptyMenuContainer();
                        utils._emptyContentContainer();
                        services.parseRSS(echoJS, eCont.echoContent);
                }
            }
        };

    return {
        init: _init,
        _changeChannel: _changeChannel
    };
});
