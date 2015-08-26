var gulp = require('gulp'),
	jade = require('gulp-jade'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	reload      = browserSync.reload;

/*gulp.task('default', function(){
	console.log('Gulp "Default" Task is Start');
	gulp.start('eat:food');
});*/

var config = {
	'jade': { 'pretty': true },
	'sass': {
		'outputStyle': 'compact' // compact, compressed, nested, expanded
	}
};

// gulp.task('default', ['jade', 'sass', 'watch']);

gulp.task('default', ['jade', 'sass'], function() {
	browserSync({'server': './dist'})
	gulp.start('watch');
});

gulp.task('watch:jade', ['jade'], reload);

gulp.task('jade', function() {
	return gulp.src('src/**/*.jade')
		.pipe( jade( config.jade ) )
		.on('error', errorLog)
		.pipe( gulp.dest('dist') );
});

gulp.task('sass', function() {
	return gulp.src('src/sass/**/*.scss')
		.pipe( sass( config.sass ).on('error', sass.logError) )
		.pipe( gulp.dest('dist/css') )
		.pipe( reload({stream: true}) );
});

gulp.task('watch', function() {
	gulp.watch(['src/**/*.jade'], ['watch:jade']);
	gulp.watch(['src/sass/**/*.scss'], ['sass']);
});

function errorLog(error) {
	console.error.bind(error);
	this.emit('end');
}

/*gulp.task('jade', function(){
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
});*/

