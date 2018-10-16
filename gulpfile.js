"use strict";
var gulp = require("gulp");
var babel = require("gulp-babel");
var sass = require("gulp-sass");

gulp.task("default", () =>
  gulp
    .src("assets/js/*.js")
    .pipe(
      babel({
        presets: ["env"]
      })
    )
    .pipe(gulp.dest("assets/dist"))
);

gulp.task("sass", function() {
  return gulp
    .src("./assets/scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./assets/css"));
});

gulp.task("sass:watch", function() {
  gulp.watch("./assets/scss/*.scss", ["sass"]);
});
