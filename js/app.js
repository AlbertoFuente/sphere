define(['topBar', 'echoContent', 'infoContent', 'services'], function(topBar, eCont, iCont, services) {
    'use strict';

    var infoWorld = 'http://www.infoworld.com/news/index.rss',
        echoJS = 'http://www.echojs.com/rss',
        dailyJS = 'http://dailyjs.com/rss/',
        fiveJS = 'https://fivejs.codeschool.com/feed.rss',
        jsRocks = 'http://jsrocks.org/rss',
        frontEndLabs = 'http://frontendlabs.io/feed',
        javascript = 'https://www.javascript.com/feed/rss';

    var _init = function() {
        var menuOptions = {
            op1: 'Videos',
            op2: 'Posts',
            op3: 'Books'
        };
        // top bar
        topBar.upMenu('Sphere');
        topBar.upMenu.prototype.insertTitle();
        topBar.upMenu.prototype.insertMenu(menuOptions);
        // post content (echoJS)
        services.parseRSS(echoJS, eCont.echoContent);
        services.parseRSS(infoWorld, iCont.infoContent);
    };

    return {
        init: _init
    };
});
