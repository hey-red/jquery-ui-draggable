var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require("gulp-rename"),
	sourcemaps = require('gulp-sourcemaps');

var bowerPath = './bower_components/jquery-ui/ui/';

gulp.task('build', function() {
    return gulp.src([
		bowerPath + 'core.js',
		bowerPath + 'widget.js',
		bowerPath + 'mouse.js',
		bowerPath + 'draggable.js'
	])
	.pipe(concat('jquery-ui-draggable.js'))
	.pipe(gulp.dest('./dist'));
});

gulp.task('minify', ['build'], function() {
    return gulp.src(
		'./dist/jquery-ui-draggable.js'
	)
	.pipe(sourcemaps.init())
	.pipe(uglify())
	.pipe(rename('jquery-ui-draggable.min.js'))
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest('./dist'));
});

gulp.task('default', ['build', 'minify']);