define('services', ['utils', 'jquery'], function(utils, $) {
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

            queryScript = utils._create("script");
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
                },
                error: function(xhr) {
                    console.error(xhr.statusText);
                }
            });
        },
        _parseOpml = function(opmlUrl, callback) {
            $.ajax({
                url: opmlUrl,
                dataType: 'xml',
                success: function(data) {
                    callback(data);
                },
                error: function(xhr) {
                    console.error(xhr.statusText);
                }
            });
        };

    return {
        configCall: _configCall,
        parseRSS: _parseRSS,
        parseOpml: _parseOpml
    };
});
