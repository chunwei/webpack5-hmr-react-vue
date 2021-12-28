const {merge} = require('webpack-merge')
const commonConfig=require('./webpack.common')
const prodConfig=require('./webpack.prod')
const devConfig=require('./webpack.dev')

module.exports=(env)=>{
  const isProduction = env.production
  const config=isProduction?prodConfig:devConfig
  const mergedConfig=merge(commonConfig,config)
  return mergedConfig
}