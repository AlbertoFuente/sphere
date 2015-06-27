define(['text!../views/opmlContent.html', 'jquery', 'utils'], function(html, $, utils) {
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
            subLink = null;

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
            }
        }
    };

    return {
        opmlContent: _opmlContent
    };
});
