'use strict';

var gulp = require('gulp');
var Uglify = require('gulp-uglify');

gulp.task('default', function (done) {

    gulp.src(['./node_modules/jquery/dist/jquery.min.js'])
        .pipe(gulp.dest('./js'));

    gulp.src(['./node_modules/jqueryui/jquery-ui.min.js'])
        .pipe(gulp.dest('./js'));

    gulp.src(['./node_modules/bootstrap/dist/css/bootstrap.min.css'])
        .pipe(gulp.dest('./css'));

    gulp.src(['./node_modules/jqueryui/jquery-ui.min.css'])
        .pipe(gulp.dest('./css'));

    done();
});

gulp.task('build', ['default'], function (done) {

    gulp.src([
        '*css/**/*',
        './logo.png',
        './manifest.json',
        './options.html'])
        .pipe(gulp.dest('./dist'));

    gulp.src(['./js/options.js'])
        .pipe(Uglify())
        .pipe(gulp.dest('./dist/js'));

    gulp.src(['./js/jquery.min.js'])
        .pipe(gulp.dest('./dist/js'));

    gulp.src(['./js/background.js'])
        .pipe(Uglify())
        .pipe(gulp.dest('./dist/js'));

    done();
});