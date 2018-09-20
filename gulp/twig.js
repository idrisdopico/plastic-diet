const paths     = require("./_config").paths;

const gulp      = require("gulp");
const twig      = require('gulp-twig');

function buildTwig() {
    return gulp.src(paths.src.twig + "templates/*.twig")
        .pipe(twig({defaults: { cache: false }}))
        .pipe(gulp.dest('./dist/'))
}

exports.buildTwig = buildTwig;
