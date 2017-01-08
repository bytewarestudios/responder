var gulp = require('gulp');
var sass = require('gulp-sass');

// configuration
var CONFIG = {
  sass:{
    src:'./src/sass/**/**.scss',
    dist:'./dist/css/'
  }
};

gulp.task('sass', function() {
  return gulp.src(CONFIG.sass.src)
          .pipe(sass())
          .pipe(gulp.dest(CONFIG.sass.dist));
});

gulp.task('default',['sass'], function() {});