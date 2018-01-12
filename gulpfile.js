var gulp = require('gulp');

gulp.task('sass', function () {
  return gulp.src('app/scss/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
});