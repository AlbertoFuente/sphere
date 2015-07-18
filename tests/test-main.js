var tests = [];
for (var file in window.__karma__.files) {
    if (/Spec\.js$/.test(file)) {
        tests.push(file);
    }
}

require.config({
    // Karma serves files under /base, which is the basePath from your config file
    baseUrl: '',

    // add text! plugin
    paths: {
        // modules
        'app': 'js/app',
        'topBar': 'js/topBar',
        'services': 'js/services',
        'echoContent': 'js/echoContent',
        'opmlContent': 'js/opmlContent',
        // utils
        'utils': 'js/utils/utils',
        // vendor
        'jquery': 'node_modules/jquery/dist/jquery.min'
    },

    // dynamically load all test files
    deps: tests,

    // we have to kickoff jasmine, as it is asynchronous
    callback: window.__karma__.start
});
