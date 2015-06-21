define([
    'topBar',
    'echoContent',
    'infoContent',
    'javaContent',
    'dailyContent',
    'services',
    'utils',
    'jquery'
], function(topBar, eCont, iCont, jaCont, dayCont, services, utils, $) {
    'use strict';

    var infoWorld = 'http://www.infoworld.com/news/index.rss',
        echoJS = 'http://www.echojs.com/rss',
        dailyJS = 'http://dailyjs.com/rss/',
        fiveJS = 'https://fivejs.codeschool.com/feed.rss',
        jsRocks = 'http://jsrocks.org/rss',
        frontEndLabs = 'http://frontendlabs.io/feed',
        javascript = 'https://www.javascript.com/feed/rss',
        // INIT
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
            function resetContainers() {
                utils._emptyMenuContainer();
                utils._emptyContentContainer();
            }
            if (!utils._isUnd(data)) {
                switch (data) {
                    case 'EchoJS':
                        resetContainers();
                        services.parseRSS(echoJS, eCont.echoContent);
                        break;
                    case 'Javascript':
                        resetContainers();
                        services.parseRSS(javascript, jaCont.javaContent);
                        break;
                    case 'DailyJS':
                        resetContainers();
                        services.parseRSS(dailyJS, dayCont.dailyContent);
                        break;
                    case 'FiveJS':
                        resetContainers();
                        break;
                    case 'jsRocks':
                        resetContainers();
                        break;
                    case 'FrontEndLabs':
                        resetContainers();
                        break;
                    case 'infoWorld':
                        resetContainers();
                        services.parseRSS(infoWorld, iCont.infoContent);
                        break;
                    default:
                        resetContainers();
                        services.parseRSS(echoJS, eCont.echoContent);
                }
            }
        };

    return {
        init: _init,
        _changeChannel: _changeChannel
    };
});
