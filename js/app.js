define([
    'topBar',
    'echoContent',
    'services',
    'utils',
    'jquery'
], function(topBar, eCont, services, utils, $) {
    'use strict';
    // RSS
    var infoWorld = 'http://www.infoworld.com/news/index.rss',
        echoJS = 'http://www.echojs.com/rss',
        dailyJS = 'http://dailyjs.com/rss/',
        jsRocks = 'http://jsrocks.org/rss',
        frontEndLabs = 'http://frontendlabs.io/feed',
        javascript = 'https://www.javascript.com/feed/rss',
        // INIT
        _init = function() {
            var menuOptions = {
                op1: 'EchoJS',
                op2: 'Javascript',
                op3: 'DailyJS',
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
                        services.parseRSS(javascript, eCont.echoContent);
                        break;
                    case 'DailyJS':
                        resetContainers();
                        services.parseRSS(dailyJS, eCont.echoContent);
                        break;
                    case 'jsRocks':
                        resetContainers();
                        services.parseRSS(jsRocks, eCont.echoContent);
                        break;
                    case 'FrontEndLabs':
                        resetContainers();
                        services.parseRSS(frontEndLabs, eCont.echoContent);
                        break;
                    case 'infoWorld':
                        resetContainers();
                        services.parseRSS(infoWorld, eCont.echoContent);
                        break;
                    default:
                        resetContainers();
                        services.parseRSS(echoJS, eCont.echoContent);
                }
            }
        };

    return {
        init: _init
    };
});
