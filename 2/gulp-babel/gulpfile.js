var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("babel", function() {
  gulp.src('./src/js/**/*.js')
    .pipe(babel({
      modules: "common"
    }))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task("default", ["babel"]);
