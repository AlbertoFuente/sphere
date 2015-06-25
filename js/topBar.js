define(['text!../views/topBar.html', 'utils'], function(html, utils) {
    'use strict';

    // ============================================
    // TOP BAR
    // ============================================

    var _insertTitle = function(title) {
        var menuBar = utils._getId('menuBar');
        menuBar.innerHTML = html.replace('title', title);
    };

    if (!_insertTitle.prototype.insertMenu) {
        _insertTitle.prototype.insertMenu = function(menuOptions) {
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
        insertTitle: _insertTitle
    };
});
