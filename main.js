require.config({
    paths: {
        'app': 'js/app',
        'components': 'js/components',
        'services': 'js/services',
        // Plugins
        'text': 'js/plugins/text',
        // Vendor
        'jquery': 'node_modules/jquery/dist/jquery.min',
        'materialize': 'node_modules/materialize-css/bin/materialize',
        // lodash
        '_.isUndefined': 'node_modules/lodash/lang/isUndefined'
    },
    shim: {
        // Lodash functions
        '_.isUndefined': {
            exports: '_isUndef'
        }
    }
});

require(['app',
        'components',
        'services',
        'text',
        'jquery',
        '_.isUndefined'
    ],
    function(app) {
        'use strict';
        app.init();
    });
