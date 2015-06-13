define(['topBar', 'principalContent', 'services'], function(topBar, pCont, services) {
    'use strict';

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
        // post content
        services.configCall(pCont.pContent);
    };

    return {
        init: _init
    };
});
