//http://webstoemp.com/blog/gulp-setup/
//http://www.codevoila.com/post/8/minify-css-files-for-production-using-gulp

var gulp         = require('gulp'),
    path         = require('path'), 
    plumber      = require('gulp-plumber'),
    source       = require('vinyl-source-stream'),  
    webserver    = require('gulp-webserver'),
    minifyCSS    = require('gulp-minify-css'),
    concat       = require('gulp-concat'),
    reactify     = require('reactify'), 
    rename       = require('gulp-rename'), 
    less         = require('gulp-less'),
    cleanCSS     = require('gulp-clean-css');   
    del          = require('del');

// gulp.task('prettify', function() {
//   gulp.src('./public/html/*.html')
//     .pipe(prettify({indent_size: 2}))
//     .pipe(gulp.dest('./public/html'))
// });
var onError = function (err) {
      gutil.log(gutil.colors.red("ERROR", taskName), err);
      this.emit("end", new gutil.PluginError(taskName, err, { showStack: true }));
};

gulp.task('less', function(){
  return gulp.src('stylesheet/less/style.less')
             .pipe(less())
             .pipe(gulp.dest('stylesheet/css'));
});

gulp.task('minify', ['less', 'clean::css'], function(){
  return gulp.src('stylesheet/css/*.css')
             .pipe(cleanCSS())
             .pipe(concat('style.min.css'))
             .pipe(gulp.dest('build/stylesheet/'))
});

gulp.task('clean::css', function(){
  return del(['build/stylesheet/style.min.css', 'stylesheet/css/*']);
});

gulp.task('watch', function() {
   // Watch .js files
  gulp.watch('stylesheet/less/*.less', ['minify']);
  gulp.watch('build/bundler.js');
});

gulp.task('webserver', function() {
    gulp.src('./')
        .pipe(plumber())
        .pipe(
            webserver({
                host: 'localhost',
                port: '7777',
                fallback: 'index.html',
                livereload: true,
                open: true
            })
        );
});

gulp.task('default', ['watch', 'webserver', 'minify']);

