const watch         = require("./watch");
const browserSync   = require("browser-sync");

function serve() {
    browserSync({
        server: {
            baseDir: "./dist/"
        },
        open: false,
        port: 3030,
        notify: false,

        ui: {
            port: 3031
        }
    });

    const reload = (done) => {
        browserSync.reload();
        done();
    };

    const stream = (done) => {
        browserSync.stream();
        done();
    };

    watch.watchTwig(reload);
    watch.watchStyles(reload);
    watch.watchScripts(reload);
}

exports.serve = serve;
