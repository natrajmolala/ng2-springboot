module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ['jasmine'],

    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-htmlfile-reporter')
    ],

    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

    files: [
              'node_modules/systemjs/dist/system.src.js',
              'node_modules/core-js/client/shim.js',

              'node_modules/reflect-metadata/Reflect.js',
              'node_modules/zone.js/dist/zone.js',
              'node_modules/zone.js/dist/jasmine-patch.js',
              'node_modules/zone.js/dist/async-test.js',
              'node_modules/zone.js/dist/fake-async-test.js',

              // RxJs.
              { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
              { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },

              { pattern: 'node_modules/@angular/**/*.js', included: false, watched: false },
              { pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: false },

              { pattern: appBase + '**/*.js', included: false, watched: true },

              { pattern: appBase + '**/*.html', included: false, watched: true },
              { pattern: 'wwwroot/styles/**/*.css', included: false, watched: true },

              { pattern: 'app/**/*spec.ts', included: false, watched: false },
              { pattern: appBase + '**/*.js.map', included: false, watched: false }
            ]

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};