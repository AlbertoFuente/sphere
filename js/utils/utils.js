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
    // APPENDCHILD ARRAY OF ELEMENTS (in order)
    var _appendArray = function(parent, elements) {
        if (!_isUndefined(parent) && !_isUndefined(elements) && elements.length > 0) {
            var i = 0,
                elLength = elements.length;
            for (i; i < elLength; i++) {
                parent.appendChild(elements[i]);
            }
        }
        return parent;
    };

    return {
        _isUnd: _isUndefined,
        _setAttr: _setAttribute,
        _appendArr: _appendArray
    };
});
