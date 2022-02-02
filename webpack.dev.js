const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const {merge} = require("webpack-merge");
const common = require("./webpack.common");


module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: 'assets/[hash][ext][query]',
        clean: true
    },

    devtool: 'inline-source-map',

    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
            serveIndex: true,
        },
        hot: true,

    },

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader", 
                    "css-loader",
                    "sass-loader"
                ],
            },
        ],
    },
    
    plugins: [
        new HtmlWebpackPlugin({ template: './src/template.html', inject: 'body' }),
    ],

    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
        hints: false
   },
})