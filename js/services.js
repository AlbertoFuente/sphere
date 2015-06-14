define(['jquery'], function($) {
    'use strict';

    // ===================================
    // SERVICES
    // ===================================

    var _jsonP = function(url, callback, error, nomparam) {
            var queryScript,
                separador = "?",
                head = document.getElementsByTagName("head")[0];

            if (!nomparam)
                nomparam = "callback";

            if (url.indexOf("?") >= 0)
                separador = "&";

            if (queryScript)
                head.removeChild(queryScript);

            queryScript = document.createElement("script");
            queryScript.src = url + separador + nomparam + "=" + callback;

            if (error)
                queryScript.onerror = error;

            head.appendChild(queryScript);
        },
        _configCall = function(callback, url) {
            var error = 'Problems connecting with ' + url;
            _jsonP(url, callback, error);
        },
        _parseRSS = function(url, callback) {
            $.ajax({
                url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(url),
                dataType: 'json',
                success: function(data) {
                    callback(data.responseData.feed);
                }
            });
        };

    return {
        configCall: _configCall,
        parseRSS: _parseRSS
    };
});
