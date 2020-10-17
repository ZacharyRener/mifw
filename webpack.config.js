const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const path = require('path');
const config = require('./.env.JS');

module.exports = {
    entry: './scripts/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ]
    },
    plugins: [
        new BrowserSyncPlugin(
            {
                host: 'localhost',
                port: 3000,
                proxy: config.SITE_URL,
                files: "../."
            },
            {
                reload: false
            }
        )
    ]
};