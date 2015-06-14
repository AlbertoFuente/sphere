define(['text!../views/principalContent.html', 'utils', 'jquery'], function(html, utils, $) {
    'use strict';

    // ===================================
    // PRINCIPAL CONTENT
    // ===================================

    var _echoContent = function(posts) {
        var container = document.getElementById('postContent');

        if (!utils._isUnd(posts) && !utils._isUnd(html)) {
            container.innerHTML = html;
            var panel = document.getElementById('postContent'),
                miniPanel = document.getElementById('echoMiniPanel');

            if (!utils._isUnd(miniPanel)) {
                var title = document.createElement('h5'),
                    link = document.createElement('a'),
                    postsContainer = document.createElement('div'),
                    pContainer = document.getElementById('echoContentPanel');

                title.innerHTML = posts.title;
                utils._setAttr(link, 'href', posts.link + '.html');
                link.innerHTML = posts.link;

                if (!utils._isUnd(posts.entries) && posts.entries.length > 0) {
                    var i = 0,
                        entries = posts.entries.length;
                    for (i; i < entries; i++) {
                        var subDiv = document.createElement('div'),
                            subLink = document.createElement('a');
                        utils._setAttr(subLink, 'href', '#');
                        utils._setAttr(subLink, 'data', posts.entries[i].link);
                        subLink.className = 'subMenuLink';
                        subLink.innerHTML = posts.entries[i].title;

                        subDiv.appendChild(subLink);
                        postsContainer.appendChild(subDiv);
                    }
                }
                utils._appendArr(miniPanel, [title, link, postsContainer]);
                panel.appendChild(miniPanel);
            }

            if (!utils._isUnd(document.getElementsByClassName('subMenuLink'))) {
                $('.subMenuLink').click(function(ev) {
                    var link = ev.currentTarget.attributes.data.value;
                    pContainer.innerHTML = '<object type="text/html" data="' + link + '" ></object>';
                });
            }
        }
    };

    return {
        echoContent: _echoContent
    };
});
