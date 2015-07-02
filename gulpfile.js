var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('default', function() {
    gulp.src('styles/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCSS({
            keepBreaks: true
        }))
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('styles'));
});

gulp.task('js', function() {
    gulp.src([
            'js/utils/utils.js',
            'js/app.js',
            'js/echoContent.js',
            'js/opmlContent.js',
            'js/services.js',
            'js/topBar.js',
            'main.js'
        ])
        .pipe(concat('sphere.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js/'));
});

gulp.task('watch', function() {
    gulp.watch([
        'styles/styles.scss'
    ], function() {
        gulp.start('default');
    });

    gulp.watch([
        'js/utils/utils.js',
        'js/app.js',
        'js/echoContent.js',
        'js/opmlContent.js',
        'js/services.js',
        'js/topBar.js',
        'main.js'
    ], function() {
        gulp.start('js');
    });
});
