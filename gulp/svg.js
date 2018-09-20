const paths     = require("./_config").paths;

const gulp      = require("gulp");
const svgstore  = require("gulp-svgstore");
const svgmin    = require("gulp-svgmin");
const rename    = require("gulp-rename");

function generateIcons() {
    return gulp.src(paths.src.icons + "*.svg")
        .pipe(rename({prefix: "icon--"}))
        .pipe(svgmin(function() {
            const prefix = paths.src.icons;
            return {
                plugins: [
                    { cleanupAttrs: true },
                    { removeDoctype: true },
                    { removeXMLProcInst: true },
                    { removeComments: true },
                    { removeTitle: true },
                    { removeDesc: true },
                    { removeUselessDefs: true },
                    { removeXMLNS: true },
                    { removeEditorsNSData: true },
                    { removeHiddenElems: true },
                    { removeEmptyText: true },
                    { removeEmptyContainers: true },
                    { cleanupEnableBackground: true },
                    { removeUnknownsAndDefaults: true },
                    { removeNonInheritableGroupAttrs: true },
                    { removeUselessStrokeAndFill: true },
                    { removeUnusedNS: true },
                    { cleanupNumericValues: true },
                    { cleanupListOfValues: true },
                    { collapseGroups: true },
                    { sortAttrs: true },
                    { removeStyleElement: true },
                    { removeScriptElement: true },
                    { removeElementsByAttr: true },
                    { cleanupIDs: { prefix: prefix + "-", minify: true }
                    }]
            }
        }))
        .pipe(svgstore())
        .pipe(gulp.dest(paths.target.dist.img));
}

exports.generateIcons = generateIcons;