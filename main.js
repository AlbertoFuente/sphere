require.config({
    paths: {
        'app': 'js/app',
        'topBar': 'js/topBar',
        'services': 'js/services',
        'principalContent': 'js/principalContent',
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
        'principalContent',
        'text',
        'jquery',
        'utils'
    ],
    function(app) {
        'use strict';
        app.init();
    });
