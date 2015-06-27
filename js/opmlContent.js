define(['text!../views/opmlContent.html', 'jquery', 'utils', 'services'], function(html, $, utils, services) {
    'use strict';

    // ===================================
    // OPML CONTENT
    // ===================================

    var _opmlContent = function(posts) {
        var container = utils._getId('opmlContainer'),
            opmlTitle = posts.childNodes[0].childNodes[1].childNodes[0].attributes.text.value,
            opmlBody = posts.childNodes[0].childNodes[1],
            opmlBodyChilds = opmlBody.childNodes[0].childNodes,
            opmlBodyChildsLen = opmlBodyChilds.length,
            opmlBodyChildsAttrs = null,
            opmlName = null,
            opmlXmlUrl = null,
            i = 0,
            menuPanel = null,
            titleContainer = null,
            menuSubContainer = null,
            menuSubContainerList = null,
            subLi = null,
            subLink = null,
            listId = null,
            listIdChilds = null,
            listIdChildsLen = null,
            firstLiElement = null,
            opmlContainer = null,
            youtubeIframe = function(url) {
                var iFrame = utils._create('iframe');
                utils._setAttr(iFrame, 'width', '560');
                utils._setAttr(iFrame, 'height', '315');
                utils._setAttr(iFrame, 'src', url);
                utils._setAttr(iFrame, 'frameborder', '0');
                utils._setAttr(iFrame, 'allowfullscreen');
                return iFrame;
            },
            appendInContainer = function(elements) {
                var entries = elements.entries,
                    j = 0,
                    entriesLen = entries.length,
                    videoContainer = null,
                    videoTitle = null,
                    videoDate = null,
                    video = null;

                for (j; j < entriesLen; j++) {
                    videoContainer = utils._create('div');
                    videoTitle = utils._create('h6');
                    videoDate = utils._create('p');
                    video = youtubeIframe(entries[j].link);

                    videoTitle.innerHTML = entries[j].title;
                    videoDate.innerHTML = entries[j].publishedDate;
                    utils._appendArr(videoContainer, [videoTitle, videoDate, video]);
                    opmlContainer.appendChild(videoContainer);
                }
            };

        if (!utils._isUnd(posts) && !utils._isUnd(html)) {
            container.innerHTML = html;

            if (!utils._isNull(opmlTitle) && !utils._isUnd(menuPanel)) {
                menuPanel = utils._getId('opmlMenu');
                titleContainer = (!utils._isUnd(menuPanel)) ? utils._create('h5') : null;
                titleContainer.innerHTML = opmlTitle;
                menuSubContainer = utils._create('div');
                menuSubContainer.id = 'opmlMenuSubContainer';
                menuSubContainerList = utils._create('ul');
                menuSubContainerList.id = 'menuSubContainerList';

                menuSubContainer.appendChild(menuSubContainerList);
                utils._appendArr(menuPanel, [titleContainer, menuSubContainer]);

                for (i; i < opmlBodyChildsLen; i++) {
                    subLi = utils._create('li');
                    subLink = utils._create('a');

                    opmlBodyChildsAttrs = opmlBodyChilds[i].attributes;
                    opmlName = opmlBodyChildsAttrs[1].value;
                    opmlXmlUrl = opmlBodyChildsAttrs[3].value;

                    utils._setAttr(subLink, 'href', '#');
                    utils._setAttr(subLink, 'data-link', opmlXmlUrl);

                    subLink.innerHTML = opmlName;

                    subLi.appendChild(subLink);
                    menuSubContainerList.appendChild(subLi);
                }

                window.setTimeout(function() {
                    listId = utils._getId('menuSubContainerList');
                    listIdChilds = listId.childNodes;
                    listIdChildsLen = listIdChilds.length;
                    firstLiElement = listIdChilds[0].childNodes[0].attributes['data-link'].value;
                    opmlContainer = utils._getId('opmlContainer');

                    if (!utils._isUnd(opmlContainer)) {
                        services.parseRSS(firstLiElement, appendInContainer);
                    }
                }, 200);
            }
        }
    };

    return {
        opmlContent: _opmlContent
    };
});
