'use strict';

global.$ = {
	gulp: require('gulp'),
	gp: require('gulp-load-plugins')(),
	bs: require('browser-sync').create(),

	path: {
		tasks: require('./gulp/config/tasks.js')
	}
};

$.path.tasks.forEach(function (taskPath) {
	require(taskPath)();
})



$.gulp.task('dev', $.gulp.series(
	'clean',
	$.gulp.parallel(
		'pug',
		'fonts',
		'scss-lib:dev',
		'scss:dev',
		'libsJS:dev',
		'scripts:dev',
		'img:dev',
	)
));


$.gulp.task('build', $.gulp.series(
	'clean',
	$.gulp.parallel(
		'pug',
		'fonts',
		'scss:build',
		'libsJS:build',
		'scripts:build',
		'img:build',
	)
));

$.gulp.task('build-min', $.gulp.series(
	'clean',
	$.gulp.parallel(
		'pug',
		'fonts',
		'scss:build-min',
		'libsJS:build',
		'scripts:build-min',
		'img:build',
	)
));


$.gulp.task('default', $.gulp.series(
	'dev',
	$.gulp.parallel(
		'watch',
		'serve'
	)
));


