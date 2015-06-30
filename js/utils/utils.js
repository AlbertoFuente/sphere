define(function() {
    'use strict';

    // UNDEFINED
    var _isUndefined = function(value) {
            return value === undefined;
        },
        // NULL
        _isNull = function(value) {
            return value === null;
        },
        // SET ATTRIBUTE
        _setAttribute = function(elem, attr, val) {
            elem.setAttribute(attr, val);
            return elem;
        },
        // APPENDCHILD ARRAY OF ELEMENTS (in order)
        _appendArray = function(parent, elements) {
            if (!_isUndefined(parent) && !_isUndefined(elements) && elements.length > 0) {
                var i = 0,
                    elLength = elements.length;
                for (i; i < elLength; i++) {
                    parent.appendChild(elements[i]);
                }
            }
            return parent;
        },
        // insert iframe
        _appendContent = function(elem, link) {
            elem.innerHTML = '<object type="text/html" data="' + link + '" id="ifrmObject"></object>';
            return elem;
        },
        // Empty menu container
        _emptyMenuContainer = function() {
            var miniPanel = $('#echoMiniPanel');
            miniPanel.empty();
        },
        // Empty content container
        _emptyContentContainer = function() {
            var contentPanel = $('#echoContentPanel');
            contentPanel.empty();
        },
        // document.createElement()
        _createElement = function(elem) {
            return document.createElement(elem);
        },
        // document.getElementById()
        _getId = function(id) {
            return document.getElementById(id);
        },
        // document.getElementsByClassName()
        _getClass = function(cl) {
            return document.getElementsByClassName(cl);
        },
        // youtube iframe
        _youtubeIframe = function(url) {
            var iFrame = _createElement('iframe');
            _setAttribute(iFrame, 'width', '300');
            _setAttribute(iFrame, 'height', '160');
            _setAttribute(iFrame, 'src', url);
            _setAttribute(iFrame, 'frameborder', '0');
            _setAttribute(iFrame, 'allowfullscreen', '');
            return iFrame;
        };

    return {
        _isUnd: _isUndefined,
        _isNull: _isNull,
        _setAttr: _setAttribute,
        _appendArr: _appendArray,
        _appendContent: _appendContent,
        _emptyMenuContainer: _emptyMenuContainer,
        _emptyContentContainer: _emptyContentContainer,
        _create: _createElement,
        _getId: _getId,
        _getClass: _getClass,
        _youtubeIfrm: _youtubeIframe
    };
});
