var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var css = require('gulp-sass');
var bourbon = require('node-bourbon');
var gulp = require('gulp'),
    uglify = require('gulp-uglify');

gulp.task('build', function() {
    gulp.src(['sass/**/*.scss'])
        .pipe(css({ style: 'expanded' }))
        .pipe(autoprefixer("last 3 version", "safari 5", "ie 8", "ie 9"))
        .pipe(concat('twittersearch.css'))
        .pipe(gulp.dest('build'))
        .pipe(rename({
            basename: "twittersearch",
            suffix: ".min"
        }))
        .pipe(minifyCSS())
        .pipe(gulp.dest('build'));
    gulp.src(['js/vendor/bootstrap.min.js',
            'js/vendor/jquery.min.js',
            'js/main/twittersearchScript.js',

        ])
        .pipe(concat('twittersearch.js'))
        .pipe(gulp.dest('build'))
        .pipe(rename({
            basename: "twittersearch",
            suffix: ".min"
        }))
        .pipe(uglify())
        .pipe(gulp.dest('build'));

});

//Watch task
gulp.task('watch', function() {
    gulp.watch('sass/**/*.scss', ['build']);
    gulp.watch('js/**/*.js', ['build']);
});

gulp.task('default', ['watch']);