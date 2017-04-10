var del          = require('del');
var gulp         = require('gulp');
var typescript   = require('gulp-tsc');
var browserSync  = require('browser-sync');
var historyApi   = require('connect-history-api-fallback');
var karma        = require('karma');

//=========================================================
//  PATHS
//---------------------------------------------------------
const paths = {

    lib: {
        src: [
            'node_modules/angular2/bundles/angular2-polyfills.js',
            'node_modules/es6-shim/es6-shim.{map,min.js}',

            'node_modules/angular2/bundles/angular2.dev.js',
            'node_modules/angular2/bundles/http.dev.js',
            'node_modules/angular2/bundles/router.dev.js',
            /* module loader (polyfill needed for ie) */
            'node_modules/systemjs/dist/system-polyfills.js',
            'node_modules/systemjs/dist/system.{js,js.map}',
            /* if you want to use rx, otherwise not necessary */
            'node_modules/rxjs/bundles/Rx.{js,min.js,min.js.map}',
            /* included in order to use bootstrap */
            //'node_modules/jquery/dist/jquery.min.js',
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
            'node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf'
        ],
        target: 'dist/lib'
    },

    src: {
        html: 'src/**/*.html',
        css: 'src/**/*.css',
        config: 'src/**/*.js',
        ts: 'src/**/*.ts',
        assets: 'src/assets/**/*.*'
    },

    target: 'dist'
};

//=========================================================
//  CONFIG
//---------------------------------------------------------
const config = {
    autoprefixer: {
        browsers: ['last 3 versions', 'Firefox ESR']
    },

    browserSync: {
        files: [paths.target + '/**/*'],
        notify: false,
        open: false,
        port: 3000,
        reloadDelay: 500,
        server: {
            baseDir: paths.target,
            middleware: [
                historyApi()
            ]
        }
    },

    karma: {
        configFile: __dirname + '/karma.conf.js'
    },

    sass: {
        errLogToConsole: true,
        outputStyle: 'nested',
        precision: 10,
        sourceComments: false
    },

    ts: {
        configFile: 'tsconfig.json'
    },

    tslint: {
        report: {
            options: {emitError: true},
            type: 'verbose'
        }
    }
};



gulp.task('clean.target', () => del(paths.target));

gulp.task('copy.html', () => {
    return gulp.src(paths.src.html)
        .pipe(gulp.dest(paths.target));
});

gulp.task('copy.assets', () => {
    return gulp.src(paths.src.assets)
        .pipe(gulp.dest(paths.target + '/assets'));
});

gulp.task('copy.config', () => {
    return gulp.src(paths.src.config)
        .pipe(gulp.dest(paths.target));
});

gulp.task('copy.css', () => {
    return gulp.src(paths.src.css)
        .pipe(gulp.dest(paths.target));
});

gulp.task('copy.lib', () => {
    return gulp.src(paths.lib.src)
        .pipe(gulp.dest(paths.lib.target));
});

gulp.task('typescript-compile', function(){
  return gulp.src(['src/**/*.ts'])
    .pipe(typescript({ sourceMap: true, declaration: false,
                        outDir: 'dist', rootDir: 'src',
                        emitDecoratorMetadata: true,
                        experimentalDecorators: true, target: 'es6'}))
    .on('error', errorLog)
    .pipe(gulp.dest('dist/'));
});

function errorLog (error) {
  console.error.bind(error);
  this.emit('end');
}

gulp.task('watch', function () {
  gulp.watch('src/**/*.ts', ['typescript-compile']);
});

gulp.task('default', ['typescript-compile', 'copy.html', 'copy.assets', 'copy.config', 'copy.css']);

gulp.task('serve', done => {
    browserSync.create()
    .init(config.browserSync, done);
});


//===========================
//  TEST
//---------------------------
function karmaServer(options, done) {
    const server = new karma.Server(options, error => {
            if (error) process.exit(error);
    done();
});
server.start();
}


gulp.task('karma', done => {
    config.karma.singleRun = true;
karmaServer(config.karma, done);
});


gulp.task('karma.watch', done => {
    karmaServer(config.karma, done);
});


gulp.task('karma.run', done => {
    const cmd = process.platform === 'win32' ? 'node_modules\\.bin\\karma run karma.conf.js' : 'node node_modules/.bin/karma run karma.conf.js';
exec(cmd, (/*error, stdout*/) => {
    done();
});
});


gulp.task('test', ['default', 'karma']);

