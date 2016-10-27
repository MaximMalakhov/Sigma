var gulp = require('gulp'),
	spritesmith = require('gulp.spritesmith'),
	cleanCSS = require('gulp-clean-css'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('sprite', function () {
	var spriteData = gulp.src("dev/images/icons/*.png")
	.pipe(spritesmith({
		imgName: 'icons.png',
		cssName: 'icons.less'
	}));

	var imgStream = spriteData.img
		.pipe(gulp.dest("dev/images/icons/sprite/"));

	var cssStream = spriteData.css
		.pipe(gulp.dest("dev/css/helpers/"));
	return;
	});
	
/*автопрефиксер css*/

gulp.task('autoprefix', function() {
	gulp.src('dev/css/style.css')
		.pipe(autoprefixer({
			browsers: ['IE 11','last 2 iOS versions','last 1 Chrome versions',
			'last 1 Firefox versions','last 1 Safari versions',
			'last 1 Opera versions','last 1 Edge versions','Android >= 4.4'],
			cascade: false
		}))
	.pipe(gulp.dest('dev/css/'))
});

/*для минификации css*/

gulp.task('minify-css', function() {
	return gulp.src('dev/css/style.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dev/css/'));
});