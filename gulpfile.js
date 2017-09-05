const gulp = require("gulp");
const prettier = require("@bdchauvette/gulp-prettier");
 
gulp.task("prettify", () =>
  gulp
    .src("assets/js/script.js")
    .pipe(
      prettier({
        // Normal prettier options, e.g.: 
        singleQuote: true,
        trailingComma: "all"
      })
    )
    .pipe(gulp.dest(file => file.base))
);

gulp.task('minify', function () {
  return gulp.src(destination + '/assets/css/style.css')
    .pipe(plugins.csso())
    .pipe(plugins.rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(destination + '/assets/css/'));
});