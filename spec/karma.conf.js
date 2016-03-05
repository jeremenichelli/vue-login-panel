// karma.conf.js
module.exports = function(config) {
    config.set({
        basePath: '',

        frameworks: [ 'browserify', 'jasmine' ],

        files: [
            '../node_modules/babel-polyfill/browser.js',
            './**/*.js'
        ],

        exclude: [],

        preprocessors: {
            './**/*.js': [ 'browserify' ]
        },

        browserify: {
            debug: true,
            transform: [ 'babelify' ]
        },

        browsers: [ 'PhantomJS' ],

        reporters: [ 'spec' ]
    });
};