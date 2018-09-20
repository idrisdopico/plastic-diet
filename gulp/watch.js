const paths         = require("./_config").paths;
const js            = require("./_config").js;

const gulp          = require("gulp");
const javascript    = require("./javascript");
const sass          = require("./sass");
const twig          = require("./twig");
const lint          = require("./lint");
const php           = require('./php');

function watchStyles(callback) {
    return gulp.watch(
        paths.src.styles + "**/*.scss",
        gulp.series(sass.compileSass, lint.lintSass, callback)
    );
}

function watchTwig(callback) {
    return gulp.watch(
        paths.src.twig + "**/*.twig",
        gulp.series(twig.buildTwig, callback)
    );
}

function watchPHP(callback) {
    return gulp.watch(
        paths.src.php + "**/*.php",
        gulp.series(php.buildPHP, callback)
    );
}

function watchScripts(callback) {
    return gulp.watch(
        [js.app, js.lib, js.head],
        gulp.series(
            //lint.lintJs,
            gulp.parallel(
                javascript.compileHead,
                javascript.compileApp,
                javascript.compileLib
            ),
            callback
        )
    );
}
exports.watchStyles = watchStyles;
exports.watchScripts = watchScripts;
exports.watchTwig = watchTwig;
exports.watchPHP = watchPHP;
