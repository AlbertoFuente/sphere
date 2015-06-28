require.config({
    baseUrl: 'js',
    paths: {
        // modules
        'app': 'app',
        'topBar': 'topBar',
        'services': 'services',
        'echoContent': 'echoContent',
        'opmlContent': 'opmlContent',
        // utils
        'utils': 'utils/utils',
        // Plugins
        'text': 'plugins/text',
        // Vendor
        'jquery': '../node_modules/jquery/dist/jquery.min',
        'materialize': '../node_modules/materialize-css/bin/materialize'
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
