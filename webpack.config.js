const path =require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const {DefinePlugin} =require('webpack')
const VueLoaderPlugin =require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports={
  mode:'development',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'[name].[chunkhash:6].js',
    clean:true  // Clean the output directory before emit. since 5.20.0
  },
  devServer:{
    hot:true // default true since webpack 4
  },
  module:{
    rules:[
      {
        test:/\.(js|jsx)$/,
        exclude:/node_modules/,
        use:['babel-loader']
      },
      {
        test:/\.vue$/,
        use:[{
          loader:'vue-loader',
          options:{
            reactivityTransform:true
          }
        }]
      },
      {
        test:/\.css$/,
        use:[{
          loader:MiniCssExtractPlugin.loader,
        },{loader:'css-loader',options:{importLoaders:1,esModule:false}},'postcss-loader']
      },
      {
        test:/\.less$/,
        use:[{
          loader:MiniCssExtractPlugin.loader,
        },{loader:'css-loader',options:{importLoaders:1,esModule:false}},'postcss-loader','less-loader']
      },
      {
        test:/\.(png|gif|svg|jpe?g)$/,
        type:'asset',
        generator:{
          filename:'img/[name].[hash:6][ext]'
        },
        parser:{
          dataUrlCondition:{
            maxSize:8*1024
          }
        }
      },
      {
        test:/\.(ttf|woff2?)$/,
        type:'asset/resource',
        generator:{
          filename:'font/[name].[hash:3][ext]'
        }
      }
    ]
  },
  plugins:[
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template:'./public/index.html',
      title:'Webpack5 Play'
    }),
    new DefinePlugin({
      'BASE_URL':'"./"'
    }),
    new CopyPlugin({
      patterns:[{
        from:'./public',
        globOptions:{
          ignore:['**/index.html']
        }
      }]
    }),
    new ReactRefreshWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename:'[name].css'
    })
  ]
}