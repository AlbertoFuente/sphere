define([
    'topBar',
    'echoContent',
    'services',
    'utils',
    'jquery'
], function(topBar, eCont, services, utils, $) {
    'use strict';
    // RSS
    var rssObj = {
            EchoJS: 'http://www.echojs.com/rss',
            Javascript: 'https://www.javascript.com/feed/rss',
            DailyJS: 'http://dailyjs.com/rss/',
            jsRocks: 'http://jsrocks.org/rss',
            FrontEndLabs: 'http://frontendlabs.io/feed',
            infoWorld: 'http://www.infoworld.com/news/index.rss',
            SitePoint: 'http://www.sitepoint.com/feed/',
            Telerik: 'http://developer.telerik.com/feed/',
            cNet: 'http://www.cnet.com/rss/news/'
        },
        // INIT
        _init = function() {
            var menuOptions = {
                op1: 'EchoJS',
                op2: 'Javascript',
                op3: 'DailyJS',
                op5: 'jsRocks',
                op6: 'FrontEndLabs',
                op7: 'infoWorld',
                op8: 'SitePoint',
                op9: 'Telerik',
                op10: 'cNet'
            };
            // top bar
            topBar.upMenu('Sphere');
            topBar.upMenu.prototype.insertTitle();
            topBar.upMenu.prototype.insertMenu(menuOptions);
            // post content (echoJS)
            services.parseRSS(rssObj.EchoJS, eCont.echoContent);
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
                Object.keys(rssObj).forEach(function(key) {
                    if (key === data) {
                        resetContainers();
                        services.parseRSS(rssObj[key], eCont.echoContent);
                    }
                });
            }
        };

    return {
        init: _init
    };
});
