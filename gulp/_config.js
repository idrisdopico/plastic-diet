const paths = {
    src: {
        src: "./src/",
        twig: "./src/twig/",
        scripts: "./src/js/",
        styles: "./src/sass/",
        favicons: "./src/static/favicons/",
        fonts: "./src/fonts/",
        icons: "./src/icons/",
        static: "./src/static/",
        php: "./src/php",
        vendor: "./node_modules/"
    },

    target: {
        dist: {
            dist: "./dist/",
            styles: "./dist/assets/css/",
            scripts: "./dist/assets/js/",
            static: "./dist/assets/",
            img: "./dist/assets/img",
            favicons: "./dist/assets/favicons/",
            fonts: "./dist/assets/fonts",
            php: "./dist/assets/",
            phpc: "./dist/assets/php/config",
            phpp: "./dist/assets/php"
        }
    }
};

const js = {
    head: [
        paths.src.scripts + "./head/*.js"
    ],
    app: [
        paths.src.scripts + "app/components/*.js",
        paths.src.scripts + "app/widgets/*.js",
        paths.src.scripts + "app/app.js"
    ],
    lib: [
        paths.src.vendor + "./jquery/dist/jquery.min.js",
        paths.src.vendor + "./waypoints/lib/noframework.waypoints.min.js"
    ]
};

const clean = [
    paths.target.dist.dist
];

const favicon = {
    name:           "Hogeschool Utrecht",
    description:    "Campagne",
    background:     "#FFF",
    url:            "https://www.hu.nl/"
};

exports.paths   = paths;
exports.js      = js;
exports.clean   = clean;
exports.favicon = favicon;
