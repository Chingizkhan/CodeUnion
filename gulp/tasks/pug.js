module.exports = function() {
	$.gulp.task('pug', function() {
		return $.gulp.src('src/pug/*.pug')
			.pipe($.gp.plumber())
			.pipe($.gp.pug({
				pretty: true
			}))
			.pipe($.gp.plumber.stop())
			.pipe($.gulp.dest('build'))
			.on('end', $.bs.reload);
	});
}