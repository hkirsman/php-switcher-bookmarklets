var gulp = require('gulp');
var bookmarklet = require('gulp-bookmarklet');

gulp.task('default', function() {
  return gulp.src('src/*.js')
    .pipe(bookmarklet({
      format: 'htmlsingle',
      file: 'php-switcher-bookmarklet.html'
    }))
    .pipe(gulp.dest('./'));
});
