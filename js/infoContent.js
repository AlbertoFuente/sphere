define(['text!../views/infoContent.html', 'utils', 'jquery'], function(html, utils, $) {
    'use strict';

    var _infoContent = function(posts) {
        console.log(posts);
        var container = document.getElementById('infoContent');

        if (!utils._isUnd(posts) && !utils._isUnd(html)) {
            container.innerHTML = html;

            var miniPanel = document.getElementById('infoMiniPanel');

            if (!utils._isUnd(miniPanel)) {
                var title = document.createElement('h5'),
                    link = document.createElement('a'),
                    postsContainer = document.createElement('div'),
                    pContainer = document.getElementById('infoContentPanel');

                title.innerHTML = posts.title;
                utils._setAttr(link, 'href', posts.link + '.html');
                link.innerHTML = posts.link;
                postsContainer.className = 'postMenu';

                if (!utils._isUnd(posts.entries) && posts.entries.length > 0) {
                    var i = 0,
                        entries = posts.entries.length;
                    for (i; i < entries; i++) {
                        var subDiv = document.createElement('div'),
                            subLink = document.createElement('a'),
                            subText = document.createElement('p'),
                            author = document.createElement('p');

                        utils._setAttr(subLink, 'href', '#');
                        utils._setAttr(subLink, 'data', posts.entries[i].link);

                        subLink.className = 'subMenuLink';
                        subLink.innerHTML = posts.entries[i].title;
                        subText.innerHTML = posts.entries[i].publishedDate;
                        author.innerHTML = posts.entries[i].author;

                        utils._appendArr(subDiv, [subLink, subText, author]);
                        postsContainer.appendChild(subDiv);
                    }
                }

                utils._appendArr(miniPanel, [title, link, postsContainer]);
            }
        }
    };

    return {
        infoContent: _infoContent
    };
});
