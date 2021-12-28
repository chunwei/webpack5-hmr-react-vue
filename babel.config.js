module.exports={
  presets:[['@babel/preset-env',{
    useBuiltIns: 'usage',
    corejs:3
  }],
  ['@babel/preset-typescript'],
  ['@babel/preset-react',{
      runtime:'automatic'
    }]
  ],
  plugins:[
    '@babel/plugin-syntax-top-level-await',
    'react-refresh/babel'
  ]
}