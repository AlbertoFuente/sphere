define(['topBar'], function(topBar) {
    'use strict';

    var _init = function() {
        var menuOptions = {
            op1: 'Videos',
            op2: 'Posts',
            op3: 'Books'
        };
        topBar.upMenu('Sphere');
        topBar.upMenu.prototype.insertTitle();
        topBar.upMenu.prototype.insertMenu(menuOptions);
    };

    return {
        init: _init
    };
});
