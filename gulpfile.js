var gulp = require('gulp'),
	jade = require('gulp-jade'),
	sass = require('gulp-sass');

/*gulp.task('default', function(){
	console.log('Gulp "Default" Task is Start');
	gulp.start('eat:food');
});*/

gulp.task('default', ['jade', 'sass', 'watch']);

gulp.task('eat:food', function(){
	console.log('eating food');
});

gulp.task('jade', function(){
	gulp.src('src/index.jade')
		.pipe(jade({pretty:true}))
		.pipe(gulp.dest('dist'));
});

gulp.task('sass', function(){
	gulp.src('src/sass/style.scss')
		.pipe(sass())
		.pipe(gulp.dest('dist/sass'));
});

gulp.task('watch', function(){
	gulp.src('src/index.jade')
		.pipe(jade())
		.pipe(gulp.dest('dist'));
});