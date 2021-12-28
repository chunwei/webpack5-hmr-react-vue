const CopyPlugin = require("copy-webpack-plugin");
const {DefinePlugin} =require('webpack')

module.exports={
  mode:'production',
  
  plugins:[
    new CopyPlugin({
      patterns:[{
        from:'./public',
        globOptions:{
          ignore:['**/index.html']
        }
      }]
    }),
  ]
}