const path =require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const {DefinePlugin} =require('webpack')
const VueLoaderPlugin =require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports={
  mode:'development',
  devtool:'source-map', // default 'eval'
  devServer:{
    hot:true, // default true since webpack 4
    proxy:{
      '/api':{
        target:'https://api.github.com',
        pathRewrite:{
          "^/api":""
        },
        changeOrigin:true
      }
    }
  },
  plugins:[
    new ReactRefreshWebpackPlugin(),
  ]
}