const gulp = require("gulp");
const nunjucksRender = require("gulp-nunjucks-render");
const data = require("gulp-data");

// We can grab some data from the data.json thanks to the gulp-data 
// Only with gulp we render the following

gulp.task("default", function () {
  return gulp
    .src("src/pages/*.html")
    .pipe(
      data(function () {
        return require("./src/data.json");
      })
    )
    .pipe(
      nunjucksRender({
        path: ["src/templates"],
      })
    )
    .pipe(gulp.dest("."));
});

// With "gulp index" we would do the following

gulp.task("index", function () {
  return gulp
    .src("src/*.html")
    .pipe(
      data(function () {
        return require("./src/data.json");
      })
    )
    .pipe(
      nunjucksRender({
        path: ["src/"],
      })
    )
    .pipe(gulp.dest("."));
});
