require.config({
    paths: {
        'app': 'js/app',
        'components': 'js/components',
        'services': 'js/services'
    }
});

require(['app', 'components', 'services'], function(app, components, services) {
    'use strict';
    app.init();
});
