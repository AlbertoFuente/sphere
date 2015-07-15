require.config({
    paths: {
        // modules
        'app': 'app',
        'topBar': 'topBar',
        'services': 'services',
        'echoContent': 'echoContent',
        'opmlContent': 'opmlContent',
        // utils
        'utils': 'utils',
        // Vendor
        'jquery': '../node_modules/jquery/dist/jquery.min',
        'materialize': '../node_modules/materialize-css/bin/materialize'
    },
    callback: function() {
        'use strict';
        require(['app',
                'topBar',
                'services',
                'echoContent',
                'opmlContent',
                'utils',
                'jquery'
            ],
            function(app) {
                app.init();
            });
    }
});
