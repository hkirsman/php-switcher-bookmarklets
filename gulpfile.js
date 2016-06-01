var gulp = require('gulp');
var bookmarklet = require('gulp-bookmarklet');

gulp.task('bookmarklet', function() {
    return gulp.src('src/*.js')
        .pipe(bookmarklet({
            format: 'htmlsingle',
            file: 'awesome.html'
        }))
        .pipe(gulp.dest('./'));
});
