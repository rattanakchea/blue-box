/*global require*/
(function(r) {
    "use strict";
    var sass = r("gulp-sass");
    var gulp = r("gulp");
    //var browserSync = r('browser-sync').create;

    var server = r('gulp-server-livereload');
  

    var APP = {
    	scss: ['app/scss/**/*.scss', 'app/scss/*.scss'],
        css: 'app/css'
    };

    //scss() is function covert from scss to css
    //dependend: sass lib
    gulp.task("scss", function() {
        return gulp.src( APP.scss
      	)
        .pipe(sass())
        .pipe(gulp.dest(APP.css));
    });


    //watch all file changes
    gulp.task('watch', function(){
      gulp.watch(APP.scss, ['scss']);
      
      //other watchers
    });

    gulp.task('webserver', function() {
      gulp.src('app/')
        .pipe(server({
          livereload: true,
          open: true
        }));
    });

    //activate by running `gulp` in terminal
    // ['here'] is dependency and will be run before gulp.start
    gulp.task('default', [], function() {
        gulp.start('scss');
        gulp.start('watch');

        gulp.start('webserver');
      
    });


}(require));
