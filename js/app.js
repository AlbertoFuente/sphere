define(['components'], function(components) {
    'use strict';

    var _init = function() {
        var menuOptions = {
            op1: 'Videos',
            op2: 'Posts',
            op3: 'Books'
        };
        components.upMenu('Sphere', menuOptions);
        components.upMenu.prototype.insertTitle();
        components.upMenu.prototype.insertMenu(menuOptions);
    };

    return {
        init: _init
    };
});
