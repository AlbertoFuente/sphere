define(['text!../views/principalContent.html', 'utils', 'jquery'], function(html, utils, $) {
    'use strict';

    // ===================================
    // PRINCIPAL CONTENT
    // ===================================

    var _appendContent = function(elem, link) {
            elem.innerHTML = '<object type="text/html" data="' + link + '" ></object>';
            return elem;
        },
        _echoContent = function(posts) {
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
                    postsContainer.className = 'postMenu';

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

                    if (miniPanel.childNodes.length > 0) {
                        var j = 0,
                            minLength = miniPanel.childNodes.length,
                            firstNode = null;
                        for (j; j < minLength; j++) {
                            if (typeof miniPanel.childNodes[j] === 'object' && miniPanel.childNodes[j].tagName === 'DIV') {
                                firstNode = miniPanel.childNodes[j].childNodes[0].childNodes[0].getAttribute('data');
                            }
                        }
                        _appendContent(pContainer, firstNode);
                    }
                }

                if (!utils._isUnd(document.getElementsByClassName('subMenuLink'))) {
                    $('.subMenuLink').click(function(ev) {
                        $('#echoContentPanel').empty();
                        var link = ev.currentTarget.attributes.data.value;
                        _appendContent(pContainer, link);
                    });
                }
            }
        };

    return {
        echoContent: _echoContent
    };
});
