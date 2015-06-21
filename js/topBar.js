define(['text!../views/topBar.html', 'utils', 'jquery'], function(html, utils, $) {
    'use strict';

    // ============================================
    // TOP BAR
    // ============================================

    var _title = null;

    var _upMenu = function(title) {
        _title = title;
    };

    if (!_upMenu.prototype.insertMenu) {
        _upMenu.prototype.insertTitle = function() {
            var menuBar = document.getElementById('menuBar');
            menuBar.innerHTML = html.replace('title', _title);
        };
    }

    if (!_upMenu.prototype.insertMenu) {
        _upMenu.prototype.insertMenu = function(menuOptions) {
            var opts = document.getElementById('menuBar');

            if (opts.childNodes.length > 0) {
                var optsUl = document.getElementById('nav-mobile');

                if (!utils._isUnd(optsUl))
                    Object.keys(menuOptions).map(function(key) {
                        var ulOpt = document.createElement('li'),
                            aOpt = document.createElement('a');

                        utils._setAttr(aOpt, 'href', '#');
                        aOpt.id = menuOptions[key];
                        aOpt.className = 'topBarLink';
                        aOpt.innerHTML = menuOptions[key];
                        ulOpt.appendChild(aOpt);
                        optsUl.appendChild(ulOpt);
                    });
            }
        };
    }

    return {
        upMenu: _upMenu
    };
});
