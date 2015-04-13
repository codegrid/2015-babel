var gulp = require("gulp");
var browserify = require("browserify");
var babelify = require("babelify");
var source = require("vinyl-source-stream");

var src = "./src/js/main.js";
var name = "bundle.js";
var dist = "./";

gulp.task("babelify", function() {
  browserify({
    debug: false
  })
  .transform(babelify.configure({
    extensions: [".js"]
  }))
  .require(src, {entry: true})
  .bundle()
  .on("error", function(err) {
    console.log("Error", err.message);
    this.emit("end");
  })
  .pipe(source(name))
  .pipe(gulp.dest(dist));
});

gulp.task("default", ["babelify"]);
