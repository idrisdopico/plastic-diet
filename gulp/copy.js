const paths = require("./_config").paths;
const gulp  = require("gulp");

function copyDist() {
    return gulp.src(paths.src.static + "**")
        .pipe(gulp.dest(paths.target.dist.static));
}

exports.copyDist = copyDist;
