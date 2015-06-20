define(['text!../views/echoContent.html', 'text!../views/errorContent.html', 'utils', 'jquery'], function(html, errorHtml, utils, $) {
    'use strict';

    // ===================================
    // ECHO CONTENT
    // ===================================

    var _echoContent = function(posts) {
        var container = document.getElementById('echoContent');

        if (!utils._isUnd(posts) && !utils._isUnd(html)) {
            container.innerHTML = html;
            var miniPanel = document.getElementById('echoMiniPanel');

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
                container.appendChild(miniPanel);

                if (miniPanel.childNodes.length > 0) {
                    var j = 0,
                        minLength = miniPanel.childNodes.length,
                        firstNode = null;
                    for (j; j < minLength; j++) {
                        if (typeof miniPanel.childNodes[j] === 'object' && miniPanel.childNodes[j].tagName === 'DIV') {
                            firstNode = miniPanel.childNodes[j].childNodes[0].childNodes[0].getAttribute('data');
                        }
                    }
                    utils._appendContent(pContainer, firstNode);
                }
            }

            if (!utils._isUnd(document.getElementsByClassName('subMenuLink'))) {
                $('.subMenuLink').click(function(ev) {
                    utils._emptyContentContainer();

                    var panel = miniPanel.childNodes[3].childNodes,
                        link = ev.currentTarget.attributes.data.value,
                        i = 0,
                        panelLength = panel.length;

                    for (i; i < panelLength; i++) {
                        var links = panel[i].childNodes[0];
                        if ($(links).hasClass('now')) {
                            $(links).removeClass('now');
                        }
                    }

                    $(this).addClass('selected');
                    $(this).addClass('now');
                    utils._appendContent(pContainer, link);
                });
            }
        }
    };

    return {
        echoContent: _echoContent
    };
});
