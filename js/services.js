define(function() {
    'use strict';

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
        _configCall = function(callback) {
            var url = 'http://http://www.echojs.com/latest/0',
                error = 'Problems connecting with ' + url;

            _jsonP(url, callback, error);
        };

    return {
        configCall: _configCall
    }
});
