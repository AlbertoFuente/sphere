var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    karma = require('gulp-karma'),
    testFiles = ['spec/test-main.js', 'spec/tests.js'];

gulp.task('sass', function() {
    'use strict';
    gulp.src('styles/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCSS({
            keepBreaks: true
        }))
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('styles'));
});

gulp.task('js', function() {
    'use strict';
    gulp.src([
            'js/utils/utils.js',
            'js/app.js',
            'js/echoContent.js',
            'js/opmlContent.js',
            'js/services.js',
            'js/topBar.js',
            'js/main.js'
        ])
        .pipe(concat('sphere.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('script/'));

    gulp.src(testFiles)
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }))
        .on('error', function(err) {
            throw err;
        });
});

gulp.task('watch', function() {
    'use strict';
    gulp.watch([
        'styles/styles.scss'
    ], function() {
        gulp.start('sass');
    });

    gulp.watch([
        'js/utils/utils.js',
        'js/app.js',
        'js/echoContent.js',
        'js/opmlContent.js',
        'js/services.js',
        'js/topBar.js',
        'js/main.js',
        'tests/appSpec.js'
    ], function() {
        gulp.start('js');
    });
});

gulp.task('default', function() {
    'use strict';

    gulp.src('styles/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCSS({
            keepBreaks: true
        }))
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('styles'));

    gulp.src([
            'js/utils/utils.js',
            'js/app.js',
            'js/echoContent.js',
            'js/opmlContent.js',
            'js/services.js',
            'js/topBar.js',
            'js/main.js'
        ])
        .pipe(concat('sphere.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('script/'));

    gulp.src(testFiles)
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }))
        .on('error', function(err) {
            throw err;
        });
});
