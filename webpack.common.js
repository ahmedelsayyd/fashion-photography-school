const path = require('path');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');


module.exports = {
    entry: {
      main: './src/index.js',
    },

    module: {
        rules: [

            {
              test: /\.html$/i,
              loader: "html-loader",
            },
            

            // {
            //   test: /\.(png|jpg|jpeg|gif)$/i,
            //   type: 'asset/resource'
            // },

            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            },

            {
              test: /\.svg$/,
              include: /.*sprite\.svg/,
              loader: 'svg-sprite-loader',
              options: {
                  // extract: true,
                  // spriteFilename: 'spritte.svg',
                  // runtimeCompat: true
                }
            }
        ]
    } ,

    plugins: [
      new SpriteLoaderPlugin()

    ],

};