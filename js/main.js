require.config({
    paths: {
        // modules
        'app': 'app',
        'topBar': 'topBar',
        'services': 'services',
        'echoContent': 'echoContent',
        'opmlContent': 'opmlContent',
        // utils
        'utils': 'utils'
    },
    callback: function() {
        'use strict';
        require([
                'app',
                'topBar',
                'services',
                'echoContent',
                'opmlContent',
                'utils'
            ],
            function(app) {
                app.init();
            });
    }
});
