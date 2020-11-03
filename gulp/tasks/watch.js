module.exports = function () {
	$.gulp.task('watch', function() {
		$.gulp.watch('src/pug/**/*.pug', $.gulp.series('pug'));
		$.gulp.watch('src/static/scss/**/*.scss', $.gulp.series('scss:dev'));
		$.gulp.watch('src/static/js/**/*.js', $.gulp.series('scripts:dev'));
		$.gulp.watch('src/static/img/*', $.gulp.series('img:dev'));
	});
}