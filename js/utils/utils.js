define(['services'], function(services) {
    'use strict';

    // UNDEFINED
    var _isUndefined = function(value) {
            return value === undefined;
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
        };

    return {
        _isUnd: _isUndefined,
        _setAttr: _setAttribute,
        _appendArr: _appendArray,
        _appendContent: _appendContent,
        _emptyMenuContainer: _emptyMenuContainer,
        _emptyContentContainer: _emptyContentContainer
    };
});
