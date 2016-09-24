var gulp = require('gulp'),
	spritesmith = require('gulp.spritesmith');

gulp.task('sprite', function () {
	var spriteData = gulp.src("dev/images/icons/*.png")
	.pipe(spritesmith({
		imgName: 'sprite.png',
		cssName: 'sprite.less'
	}));

	var imgStream = spriteData.img
		.pipe(gulp.dest("dev/images/icons/sprite/"));

	var cssStream = spriteData.css
		.pipe(gulp.dest("dev/css/helpers/"));
	return;
	});