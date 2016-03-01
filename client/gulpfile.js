const autoprefixer = require('autoprefixer');
const browserSync  = require('browser-sync');
const changed      = require('gulp-changed');
const del          = require('del');
const exec         = require('child_process').exec;
const gulp         = require('gulp');
const historyApi   = require('connect-history-api-fallback');
const karma        = require('karma');
const postcss      = require('gulp-postcss');
const sass         = require('gulp-sass');
const sourcemaps   = require('gulp-sourcemaps');
const tslint       = require('gulp-tslint');
const typescript   = require('gulp-typescript');


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
        sass: 'src/**/*.scss',
        ts: 'src/**/*.ts',
        assets: 'src/assets/**/*.*'
    },

    target: 'dist',

    typings: {
        entries: 'typings/tsd.d.ts',
        watch: 'typings/**/*.ts'
    }
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


//=========================================================
//  TASKS
//---------------------------------------------------------
gulp.task('clean.target', () => del(paths.target));


gulp.task('copy.html', () => {
    return gulp.src(paths.src.html)
        .pipe(gulp.dest(paths.target));
});

gulp.task('copy.assets', () => {
    return gulp.src(paths.src.assets)
        .pipe(gulp.dest(paths.target));
});

gulp.task('copy.lib', () => {
    return gulp.src(paths.lib.src)
        .pipe(gulp.dest(paths.lib.target));
});


gulp.task('lint', () => {
    return gulp.src(paths.src.ts)
        .pipe(tslint())
        .pipe(tslint.report(
            config.tslint.report.type,
            config.tslint.report.options
        ));
});


gulp.task('sass', () => {
    return gulp.src(paths.src.sass)
        .pipe(sass(config.sass))
        .pipe(postcss([
            autoprefixer(config.autoprefixer)
        ]))
        .pipe(gulp.dest(paths.target));
});


gulp.task('serve', done => {
    browserSync.create()
    .init(config.browserSync, done);
});


const tsProject = typescript.createProject(config.ts.configFile);

gulp.task('ts', () => {
    return gulp.src([paths.src.ts, paths.typings.entries], {allowEmpty: true})
        .pipe(changed(paths.target, {extension: '.js'}))
        .pipe(sourcemaps.init())
        .pipe(typescript(tsProject))
        .js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.target));
});


//===========================
//  BUILD
//---------------------------
gulp.task('build', gulp.series(
    'clean.target',
    'copy.html',
    'copy.assets',
    'copy.lib',
    'sass',
    'ts'
));


//===========================
//  DEVELOP
//---------------------------
gulp.task('default', gulp.series(
    'build',
    'serve',
    function watch(){
        gulp.watch(paths.src.html, gulp.task('copy.html'));
        gulp.watch(paths.src.sass, gulp.task('sass'));
        gulp.watch([paths.src.ts, paths.typings.watch], gulp.task('ts'));
    }
));


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


gulp.task('test', gulp.series('lint', 'build', 'karma'));


gulp.task('test.watch', gulp.parallel(
        gulp.series('lint', 'build', 'karma.watch'),
        () => gulp.watch(paths.src.ts, gulp.series('ts', 'karma.run'))
));
