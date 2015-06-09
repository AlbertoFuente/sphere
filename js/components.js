define(function() {
    'use strict';

    var _title = null;

    var _upMenu = function(title) {
        _title = title;
    };

    if (!_upMenu.prototype.insertMenu) {
        _upMenu.prototype.insertMenu = function() {
            var menuBar = document.getElementById('menuBar');
            menuBar.innerHTML = _title;
        };
    }

    return {
        upMenu: _upMenu
    };
});
