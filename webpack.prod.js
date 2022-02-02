const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

var HtmlWebpackPlugin = require("html-webpack-plugin");


const path = require('path');

const {merge} = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common ,{
    mode: "production",

    output: {
      filename: "[name].[contenthash].bundle.js",
      path: path.resolve(__dirname, "dist"),
      assetModuleFilename: 'assets/[hash][ext][query]',
      clean: true
    },


    module: {
        rules: [
        {
            test: /\.s[ac]ss$/i,
            use: [
                MiniCssExtractPlugin.loader, 
                "css-loader",
                "sass-loader"
            ],
        },


        ],
    },
    

    plugins: [
        new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
        new CleanWebpackPlugin(),
    ],

    optimization: {
        minimizer:[
            new CssMinimizerPlugin(),
            new TerserPlugin(),
            new HtmlWebpackPlugin({
                template: "./src/template.html",
                minify: {
                  removeAttributeQuotes: true,
                  collapseWhitespace: true,
                  removeComments: true
                }
            })
        ]
    }


});