require.config({
    paths: {
        // modules
        'app': 'js/app',
        'topBar': 'js/topBar',
        'services': 'js/services',
        'echoContent': 'js/echoContent',
        'opmlContent': 'js/opmlContent',
        // utils
        'utils': 'js/utils/utils',
        // Plugins
        'text': 'js/plugins/text',
        // Vendor
        'jquery': 'node_modules/jquery/dist/jquery.min',
        'materialize': 'node_modules/materialize-css/bin/materialize'
    }
});

require(['app',
        'topBar',
        'services',
        'echoContent',
        'opmlContent',
        'utils',
        'text',
        'jquery'
    ],
    function(app) {
        'use strict';
        app.init();
    });
