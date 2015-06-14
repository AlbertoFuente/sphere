define(function() {
    'use strict';

    // UNDEFINED
    var _isUndefined = function(value) {
        return value === undefined;
    };
    // SET ATTRIBUTE
    var _setAttribute = function(elem, attr, val) {
        elem.setAttribute(attr, val);
        return elem;
    };

    return {
        _isUnd: _isUndefined,
        _setAttr: _setAttribute
    };
});
