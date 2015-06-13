define(['text!../views/principalContent.html', 'utils'], function(html, utils) {
    'use strict';

    // ===================================
    // PRINCIPAL CONTENT
    // ===================================

    var _pContent = function(posts) {
        var container = document.getElementById('postContent');

        console.log(posts);
    };

    return {
        pContent: _pContent
    };
});
