const paths     = require("./_config").paths;

const gulp      = require("gulp");
const sasslint  = require("gulp-sass-lint");
const newer     = require("gulp-newer");


function lintSass() {
    return gulp.src(paths.src.styles + "**/*.scss")
        .pipe(newer(paths.target.dist.styles))
        .pipe(sasslint())
        .pipe(sasslint.format())
        .pipe(sasslint.failOnError())
}

exports.lintSass = lintSass;
