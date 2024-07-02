const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const rename = require('gulp-rename');

// Task to copy and optimize images
function images() {
    return gulp.src('src/img/*')
        .pipe(imagemin()) // Optimize images (optional)
        .pipe(rename({ dirname: '' })) // Flatten directory structure
        .pipe(gulp.dest('dist/img/'));
}

// Task to watch changes in images
function watch() {
    gulp.watch('src/img/*', images);
}

exports.default = gulp.series(images, watch);
