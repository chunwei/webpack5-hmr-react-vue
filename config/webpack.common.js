const path =require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')
const {DefinePlugin} =require('webpack')
const VueLoaderPlugin =require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const resolveApp=(relativePath)=>path.resolve(process.cwd(),relativePath) ;
module.exports={
  resolve:{
    extensions:['.ts','.jsx','vue','...'],
    // alias:{'@':resolveApp('./src')}
  },
  output:{
    path:resolveApp('./dist'),
    filename:'[name].[chunkhash:6].js',
    clean:true  // Clean the output directory before emit. since 5.20.0
  },
  module:{
    rules:[
      {
        test:/\.(ts|js|jsx)$/,
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
      },
      // {
      //   test:/\.ts$/,
      //   use:['ts-loader']
      // }
    ]
  },
  plugins:[
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template:'./public/index.html',
      title:'Webpack5 Play'
    }),
    new MiniCssExtractPlugin({
      filename:'[name].css'
    }),
    new DefinePlugin({
      'BASE_URL':'"./"'
    }),
  ],
  experiments: {
    topLevelAwait: true, // await
  }
}