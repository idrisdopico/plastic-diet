const gulp          = require("gulp");
const sass          = require("./gulp/sass");
const lint          = require("./gulp/lint");
const svg           = require("./gulp/svg");
const copy          = require("./gulp/copy");
const javascript    = require("./gulp/javascript");
const twig          = require("./gulp/twig");
const serve         = require("./gulp/serve");
const clean         = require("./gulp/clean");
const favicons      = require("./gulp/favicons");
const fonts         = require("./gulp/fonts");

gulp.task("default", gulp.series(
    clean.clean,

    gulp.parallel(
        lint.lintSass
    ),
    gulp.parallel(
        sass.compileSass,
        javascript.compileHead,
        javascript.compileLib,
        javascript.compileApp,
        copy.copyDist
    ),
    gulp.parallel(
        fonts.generateFonts
    ),
    gulp.parallel(
        favicons.generateFavicons
    ),
    gulp.parallel(
        twig.buildTwig
    ),
    serve.serve
));

gulp.task("icons", gulp.parallel(
    svg.generateIcons
));

gulp.task("favicons", gulp.parallel(
    favicons.generateFavicons
));

gulp.task("clean", gulp.parallel(
    clean.clean
));
