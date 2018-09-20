const paths         = require("./_config").paths;

const gulp          = require("gulp");
const sass          = require("gulp-sass");
const autoprefixer  = require("gulp-autoprefixer");
const cleanCSS      = require("gulp-clean-css");
const newer         = require("gulp-newer");

function compileSass() {
    return gulp.src(paths.src.styles + "*.scss")
        .pipe(newer(paths.target.dist.styles))
        .pipe(sass())
        .pipe(autoprefixer(["last 2 versions", "> 5%", "Firefox ESR"]))
        .pipe(cleanCSS({ compatibility: "ie9" }))
        .pipe(gulp.dest(paths.target.dist.styles))
}

exports.compileSass = compileSass;
