define(['topBar', 'principalContent', 'services'], function(topBar, pCont, services) {
    'use strict';

    var infoWorld = 'http://www.infoworld.com/news/index.rss',
        echoJS = 'http://www.echojs.com/rss',
        dailyJS = 'http://dailyjs.com/rss/',
        fiveJS = 'https://fivejs.codeschool.com/feed.rss',
        jsRocks = 'http://jsrocks.org/rss',
        frontEndLabs = 'http://frontendlabs.io/feed';

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
        services.parseRSS(echoJS, pCont.echoContent);
    };

    return {
        init: _init
    };
});
