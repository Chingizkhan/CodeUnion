module.exports = function () {
	$.gulp.task('scss:dev', function() {
		return $.gulp.src('src/static/scss/main.scss')
			.pipe($.gp.plumber())
			.pipe($.gp.sourcemaps.init())
			.pipe($.gp.sass())
			.pipe($.gp.autoprefixer())
			.on("error", $.gp.notify.onError({
		        title: "scss"
		      }))
			.pipe($.gp.sourcemaps.write())
			.pipe($.gp.rename('main.min.css'))
			.pipe($.gulp.dest('build/static/css'))
			.pipe($.bs.stream());
	});

	$.gulp.task('scss:build', function() {
		return $.gulp.src('src/static/scss/main.scss')
			.pipe($.gp.sass())
			.pipe($.gp.autoprefixer())
			.pipe($.gp.csso())
			.pipe($.gp.rename('main.min.css'))
			.pipe($.gulp.dest('build/static/css'))
	});

	$.gulp.task('scss:build-min', function () {
		return $.gulp.src('src/static/scss/main.scss')
		.pipe($.gp.sass())
		.pipe($.gp.autoprefixer())
		.pipe($.gp.csscomb())
		.pipe($.gp.csso())
		.pipe($.gp.rename('main.min.css'))
		.pipe($.gulp.dest('build/static/css/'))
	});

	$.gulp.task('scss-lib:dev', function () {
		return $.gulp.src('src/static/scss/utils/**/*.scss')
		.pipe($.gp.plumber())
		.pipe($.gp.sourcemaps.init())
		.pipe($.gp.sass())
		.pipe($.gp.autoprefixer())
		.on("error", $.gp.notify.onError({
	        title: "style"
	      }))
		.pipe($.gp.csso())
		.pipe($.gp.sourcemaps.write())
		.pipe($.gulp.dest('build/static/css/utils'))
		.pipe($.bs.stream());
	});
}