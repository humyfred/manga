const webpack = require('webpack');

const vendors = [
    'babel-polyfill',
    'isomorphic-fetch',
    'react',
    'react-dom',
    'react-redux',
    'react-router-redux',
    'react-router',
    'redux',
    'redux-thunk',
    'redux-logger',
];

module.exports = {
    output: {
        path: 'dist/static',
        filename: '[name].dll.js',
        library: '[name]_lib',
    },
    entry: {
        vendor: vendors,
    },
    plugins: [
        new webpack.DllPlugin({
            path: 'dist/static/manifest.json',
            name: '[name]_lib',
            context: __dirname
        }),
    ],
};