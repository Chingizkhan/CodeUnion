module.exports = function () {
	$.gulp.task('scripts:dev', function () {
		return $.gulp.src('src/static/js/main.js')
			.pipe($.gp.babel({
				presets: ['@babel/env']
			}))
			.pipe($.gulp.dest('build/static/js'))
			.pipe($.bs.stream());
	});

	$.gulp.task('scripts:build', function () {
		return $.gulp.src('src/static/js/main.js')
			.pipe($.gp.babel({
				presets: ['@babel/env']
			}))
			.pipe($.gulp.dest('build/static/js'))
	});

	$.gulp.task('scripts:build-min', function () {
		return $.gulp.src('src/static/js/main.js')
			.pipe($.gp.babel({
				presets: ['@babel/env']
			}))
			.pipe($.gp.concat('main.min.js'))
			.pipe($.gp.uglify())
			.pipe($.gulp.dest('build/static/js'))
	});

	$.gulp.task('libsJS:dev', function () {
		return $.gulp.src(['node_modules/jquery/dist/jquery.min.js',
			'node_modules/jquery-validation/dist/jquery.validate.min.js',
			'node_modules/slick-carousel/slick/slick.min.js',])
			.pipe($.gp.concat('libs.min.js'))
			.pipe($.gulp.dest('build/static/js/'))
	});

	$.gulp.task('libsJS:build', function () {
		return $.gulp.src(['node_modules/jquery/dist/jquery.min.js',
			'node_modules/jquery-validation/dist/jquery.validate.min.js',
			'node_modules/slick-carousel/slick/slick.min.js',])
			.pipe($.gp.concat('libs.min.js'))
			.pipe($.gp.uglify())
			.pipe($.gulp.dest('build/static/js/'))
	});

};

