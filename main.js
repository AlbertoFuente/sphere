require.config({
    paths: {
        'app': 'js/app',
        'topBar': 'js/topBar',
        'services': 'js/services',
        'echoContent': 'js/echoContent',
        'infoContent': 'js/infoContent',
        'javaContent': 'js/javaContent',
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
        'infoContent',
        'javaContent',
        'text',
        'jquery',
        'utils'
    ],
    function(app) {
        'use strict';
        app.init();
    });
