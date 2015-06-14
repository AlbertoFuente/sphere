var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-minify-css'),
    rename = require('gulp-rename');

gulp.task('default', function() {
    gulp.src('styles/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCSS({
            keepBreaks: true
        }))
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('styles'));
});

gulp.task('watch', function() {

    gulp.watch([
        'styles/styles.scss'
    ], function() {
        gulp.start('default');
    });
});
