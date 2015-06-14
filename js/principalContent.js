define(['text!../views/principalContent.html', 'utils'], function(html, utils) {
    'use strict';

    // ===================================
    // PRINCIPAL CONTENT
    // ===================================

    var _echoContent = function(posts) {
        var container = document.getElementById('postContent');

        if (!utils._isUnd(posts) && !utils._isUnd(html)) {
            container.innerHTML = html;
            var miniPanel = document.getElementById('postContent');

            if (!utils._isUnd(miniPanel)) {
                var title = document.createElement('h5'),
                    link = document.createElement('a'),
                    postsContainer = document.createElement('div');

                title.innerHTML = posts.title;
                link.setAttribute('href', posts.link + '.html');
                link.innerHTML = posts.link;

                if (!utils._isUnd(posts.entries) && posts.entries.length > 0) {
                    var i = 0,
                        entries = posts.entries.length;
                    for (i; i < entries; i++) {
                        var subDiv = document.createElement('div'),
                            subLink = document.createElement('a');
                        subLink.setAttribute('href', posts.entries[i].link);
                        subLink.innerHTML = posts.entries[i].title;

                        subDiv.appendChild(subLink);
                        postsContainer.appendChild(subDiv);
                    }
                }
                miniPanel.appendChild(title);
                miniPanel.appendChild(link);
                miniPanel.appendChild(postsContainer);
            }
        }
    };

    return {
        echoContent: _echoContent
    };
});
