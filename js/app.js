define(['components'], function(components) {
    'use strict';

    var _init = function() {
        var showMenuTitle = components.upMenu('Menu Title');
        components.upMenu.prototype.insertMenu();
    };

    return {
        init: _init
    };
});
