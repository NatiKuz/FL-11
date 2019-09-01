const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const less = require('gulp-sources-less');
const sourcemaps = require('gulp-sourcemaps');
const { watch, series } = require('gulp');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');

const serverTask = () => {
  browserSync.init({
    server: {
      baseDir: "./dist/"
    }
  });
};

// const jsTask = () => {
//   return gulp.src('src/js/*.js')
//     .pipe(babel({
//       presets: ['@babel/env']
//     }))
//     .pipe(sourcemaps.init())
//     .pipe(uglify())
//     .pipe(concat('app.js'))
//     .pipe(sourcemaps.write('./maps'))
//     .pipe(gulp.dest('dist/js'))
//     .pipe(browserSync.stream());
// };

const jsTask = () => {
    return gulp.src(
        [
            'node_modules/babel-polyfill/dist/polyfill.js',
            'src/js/*.js'
        ]
      )
      .pipe(babel({ presets: ['@babel/env'] }))
      //.pipe(babel({presets: ['es2015']}))
      .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(concat('app.js'))
      .pipe(sourcemaps.write('./maps'))
      .pipe(gulp.dest('dist/js'))
      .pipe(browserSync.stream());
  };

const lessTask = () => {
  return gulp.src('src/less/*.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(concat('styles.css'))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());

};
const compressImageTask = async() => {
  await gulp.src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
};
const copyTask = async () => {
  await gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist/'));
};

gulp.task('default', gulp.series(copyTask, compressImageTask, lessTask, jsTask));

exports.serve = () => {
  serverTask();
  watch('src/less/*.less', lessTask);
  watch('src/js/*.js', series(jsTask));
  watch('src/index.html', series(copyTask));
  watch('src/img/*', series(compressImageTask));
  gulp.watch('src/img/*').on('change', browserSync.reload);
  gulp.watch('src/less/*.less').on('change', browserSync.reload);
  gulp.watch('src/js/*.js').on('change', browserSync.reload);
  gulp.watch('src/index.html').on('change', browserSync.reload);
};