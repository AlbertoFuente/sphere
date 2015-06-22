require.config({
    paths: {
        // modules
        'app': 'js/app',
        'topBar': 'js/topBar',
        'services': 'js/services',
        'echoContent': 'js/echoContent',
        // Plugins
        'text': 'js/plugins/text',
        // Vendor
        'jquery': 'node_modules/jquery/dist/jquery.min',
        'materialize': 'node_modules/materialize-css/bin/materialize',
        // utils
        'utils': 'js/utils/utils'
    }
});

require(['app',
        'topBar',
        'services',
        'echoContent',
        'text',
        'jquery',
        'utils'
    ],
    function(app) {
        'use strict';
        app.init();
    });
