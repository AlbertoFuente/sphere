define(['text!../views/topBar.html', 'utils'], function(html, utils) {
    'use strict';

    // ============================================
    // TOP BAR
    // ============================================

    var _title = null,
        _upMenu = function(title) {
            _title = title;
        };

    if (!_upMenu.prototype.insertMenu) {
        _upMenu.prototype.insertTitle = function() {
            var menuBar = utils._getId('menuBar');
            menuBar.innerHTML = html.replace('title', _title);
        };
    }

    if (!_upMenu.prototype.insertMenu) {
        _upMenu.prototype.insertMenu = function(menuOptions) {
            var opts = utils._getId('menuBar');

            if (opts.childNodes.length > 0) {
                var optsUl = utils._getId('nav-mobile');

                if (!utils._isUnd(optsUl))
                    Object.keys(menuOptions).map(function(key) {
                        var ulOpt = utils._create('li'),
                            aOpt = utils._create('a');

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
