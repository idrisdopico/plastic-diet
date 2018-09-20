const paths     = require("./_config").paths;

const gulp      = require('gulp');
const copy      = require('gulp-copy');

function buildPhpFromPages() {
    return gulp.src(paths.src.twig + "pages/*.php")
        .pipe(gulp.dest(paths.target.dist.phpp));
}

function buildPhpconfig() {
    return gulp.src(paths.src.php + "/config/*.php")
        .pipe(gulp.dest(paths.target.dist.phpc));
}

function buildPhp() {
    return gulp.src(paths.src.php + "*/*.php")
        .pipe(gulp.dest(paths.target.dist.php));
}

exports.buildPhpFromPages = buildPhpFromPages;
exports.buildPhpconfig = buildPhpconfig;
exports.buildPhp = buildPhp;
