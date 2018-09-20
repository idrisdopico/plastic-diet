const targets   = require("./_config").clean;
const del       = require("del");

function clean() {
    return del(targets, {force: true});
}

exports.clean = clean;