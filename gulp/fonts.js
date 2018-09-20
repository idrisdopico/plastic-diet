const gulp          = require("gulp");
const gulpFont      = require ("gulp-font");

const paths         = require("./_config").paths;

function generateFonts() {
    return gulp.src(paths.src.fonts + '**')
        .pipe(gulp.dest(paths.target.dist.fonts))
}

exports.generateFonts = generateFonts;
