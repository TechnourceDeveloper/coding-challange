const mix = require("laravel-mix");
require("laravel-mix-merge-manifest");
let adminProductionSourceMaps = true;

mix.setPublicPath("public/admin")
    .js("resources/js/admin/index.js", "admin/js/admin.js")
    .react()
    .extract([
        "react",
        "react-dom",
        "axios",
        "react",
        "react-redux",
        "react-router-dom",
        "redux",
        "redux-thunk",
    ])
    .mergeManifest()
    .webpackConfig({
        output: {
            filename: "[name].js",
            chunkFilename: "js/[name].app.js",
            publicPath: "/admin/",
        },
        resolve: {
            alias: {
                "@helpers": __dirname + "/resources/js/helpers",
                "@assets": __dirname + "/resources/js/assets",
                "@hooks": __dirname + "/resources/js/hooks",
                "@api": __dirname + "/resources/js/api",
                "@libs": __dirname + "/resources/js/libs",
                "@common": __dirname + "/resources/js/common",
                "@adminlayout":
                    __dirname + "/resources/js/admin/common/layouts",
            },
        },
    })
    .sourceMaps(adminProductionSourceMaps, "source-map");

// mix.copy("resources/js/assets/fonts", "public/admin/fonts");
// mix.copy("resources/js/assets/images", "public/admin/images");

if (mix.inProduction()) {
    mix.version();
}

if (!mix.inProduction()) {
    mix.browserSync("http://127.0.0.1:8000/");
}
