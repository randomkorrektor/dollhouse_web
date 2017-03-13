var path = require('path');
module.exports = {
    entry: "./src/app.js",
    output: {
        path: './www/js',
        filename: "app.js"
    },
    devtool: '#source-map',
    module: {
        loaders: [{
            test: /\.css$/, loader: "style!css"
        }, {
            test: /\.js$/,
            loader: "babel-loader",
            include: [path.resolve(__dirname, "src"),]
        }, {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
        }, {
            include: /\.json$/, loaders: ["json-loader"]
        }]
    }, sassLoader: {
        includePaths: ["./src/style/scss"]
    },
    resolve: {
        extensions: ['', '.json', '.jsx', '.js']
    }
};

