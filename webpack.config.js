const path = require('path');
const glob = require('glob');
const webpack = require("webpack");

module.exports = {
    entry: { 'app': glob.sync('./src/**/*.js*') },
    output: {
        path: path.resolve(__dirname, 'bin'),
        filename: 'server.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({ minimize: true })
    ]
}