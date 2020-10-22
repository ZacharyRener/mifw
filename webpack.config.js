const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const path = require('path');
const config = require('./.env.JS');

const sveltePath = path.resolve('node_modules', 'svelte')

module.exports = {
    entry: './scripts/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        // see below for an explanation
        alias: {
          svelte: path.resolve('node_modules', 'svelte')
        },
        extensions: ['.mjs', '.js', '.svelte'],
        mainFields: ['svelte', 'browser', 'module', 'main']
    },
    module: {
        rules: [
            {
                test: /\.(?:svelte|m?js)$/,
                // Svelte internals, under node_modules MUST be included.
                //
                // Babel 7 ignores node_modules automatically, but not if they're
                // explicitely included.
                // see: https://github.com/babel/babel-loader/issues/171#issuecomment-486380160
                //
                include: [path.resolve(__dirname, 'scripts'), path.dirname(sveltePath)],
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.(html|svelte)$/,
                exclude: /node_modules/,
                use: 'svelte-loader'
            },
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
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'fonts/'
                    }
                  }
                ]
              }
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