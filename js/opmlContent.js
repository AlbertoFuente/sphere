define('opmlContent', ['jquery', 'utils', 'services'], function($, utils, services) {
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
            emptyOpmlVideoContainer = function() {
                var vidContainer = $('#opmlVideoContainer');
                if (!utils._isUnd(vidContainer)) {
                    $(vidContainer).empty();
                }
            },
            appendInContainer = function(elements) {
                var entries = elements.entries,
                    j = 0,
                    entriesLen = entries.length,
                    videoContainer = null,
                    videoTitle = null,
                    videoDate = null,
                    preVideo = null,
                    video = null,
                    parentContainer = utils._getId('opmlVideoContainer');

                for (j; j < entriesLen; j++) {
                    videoContainer = utils._create('div');
                    videoTitle = utils._create('h6');
                    videoDate = utils._create('p');
                    preVideo = entries[j].link.replace('watch?v=', 'embed/') + '?rel=0';
                    video = utils._youtubeIfrm(preVideo);
                    videoContainer.className = 'col s6 youVideo';
                    videoTitle.innerHTML = entries[j].title;
                    videoDate.innerHTML = entries[j].publishedDate;
                    utils._appendArr(videoContainer, [videoTitle, videoDate, video]);

                    if (!utils._isUnd(parentContainer)) {
                        parentContainer.appendChild(videoContainer);
                    }
                }
            };

        if (!utils._isUnd(posts)) {
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
                    subLink = utils._create('span');

                    opmlBodyChildsAttrs = opmlBodyChilds[i].attributes;
                    opmlName = opmlBodyChildsAttrs[1].value;
                    opmlXmlUrl = opmlBodyChildsAttrs[3].value;

                    subLink.className = 'youTubeVideo';
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
                }, 100);

                // EVENTS
                $('.youTubeVideo').on('click', function(ev) {
                    var link = ev.currentTarget.attributes[1].value;
                    emptyOpmlVideoContainer();
                    services.parseRSS(link, appendInContainer);

                    if (!utils._isUnd(listId) && !utils._isUnd(listIdChildsLen)) {
                        var f = 0;
                        for (f; f < listIdChildsLen; f++) {
                            var links = listIdChilds[f].childNodes[0];
                            if ($(links).hasClass('now')) {
                                $(links).removeClass('now');
                            }
                        }
                    }
                    $(this).addClass('selected');
                    $(this).addClass('now');
                });
            }
        }
    };

    return {
        opmlContent: _opmlContent
    };
});
