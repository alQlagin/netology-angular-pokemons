/* eslint-env node*/
/**
 * Gulp task to run the web server and live reload the changes in browser
 *
 * @usage
 *   $ gulp webserver
 */

var gulp = require('gulp'),
  server = require('gulp-server-livereload');

gulp.task('webserver', function () {
  gulp.src('')
    .pipe(server({
      open: true,
      log: 'debug',
      livereload: true,
      fallback: 'app/index.html',
      defaultFile: 'index.html',
      clientConsole: true
    }));
});
