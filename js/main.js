require.config({
    paths: {
        // modules
        'app': 'app',
        'topBar': 'topBar',
        'services': 'services',
        'echoContent': 'echoContent',
        'opmlContent': 'opmlContent',
        // utils
        'utils': 'utils/utils',
        // vendor
        'jquery': '../node_modules/jquery/dist/jquery.min'
    },
    callback: function() {
        'use strict';
        require([
                'app',
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
