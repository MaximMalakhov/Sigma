var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');

gulp.task('sprite', function () {
	var spriteData = gulp.src("images/icons/**/*.png")
	.pipe(spritesmith({
		imgName: 'sprite.png',
		cssName: 'sprite.css'
  }));

  var imgStream = spriteData.img
    .pipe(gulp.dest("sprite-images/"));

  var cssStream = spriteData.css
    .pipe(gulp.dest("sprite-css/"));
  return;
});