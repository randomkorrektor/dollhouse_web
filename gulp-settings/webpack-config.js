

module.exports = { devtool: "#inline-source-map", output: { filename: "app.js" }, module: { loaders: [{ test: /\.jsx?$/, exclude: [/bower_components/, /node_modules/], loader: 'babel-loader', query: { plugins: ["transform-decorators-legacy", "syntax-object-rest-spread"], presets: ["react", "es2015", "stage-0"] } }] } };

