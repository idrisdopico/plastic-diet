const paths         = require("./_config").paths;
const js            = require("./_config").js;

const gulp          = require("gulp");
const babel         = require("gulp-babel");
const concat        = require("gulp-concat");
const sourcemaps    = require("gulp-sourcemaps");
const newer         = require("gulp-newer");
const uglify        = require("gulp-uglify");

function compileHead() {
    return gulp.src(js.head)
        .pipe(newer(paths.target.dist.scripts + "head.js"))
        .pipe(concat("head.js"))
        .pipe(babel({presets: ["es2015"]}))
        .pipe(uglify())
        .pipe(gulp.dest(paths.target.dist.scripts));
}

function compileApp() {
    return gulp.src(js.app)
        .pipe(newer(paths.target.dist.scripts + "app.js"))
        .pipe(concat("app.js"))
        .pipe(sourcemaps.init())
        .pipe(babel({presets: ["es2015"]}))
        .pipe(uglify())
        .pipe(sourcemaps.write(".", { sourceRout: paths.target.dist.scripts }))
        .pipe(gulp.dest(paths.target.dist.scripts));
}

function compileLib() {
    return gulp.src(js.lib)
        .pipe(newer(paths.target.dist.scripts + "lib.js"))
        .pipe(concat("lib.js"))
        .pipe(sourcemaps.init())
        .pipe(babel({presets: ["es2015"]}))
        .pipe(uglify())
        .pipe(sourcemaps.write(".", { sourceRout: paths.target.dist.scripts }))
        .pipe(gulp.dest(paths.target.dist.scripts));
}

exports.compileHead = compileHead;
exports.compileApp = compileApp;
exports.compileLib = compileLib;
