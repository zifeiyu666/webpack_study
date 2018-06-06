const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  // devtool: 'eval-source-map', 
  entry: __dirname + "/app/main.js",//入口文件 
  output: {
    path: __dirname + "/public",//打包后的文件存放的地方 
    filename: "bundle.js"//打包后输出文件的文件名 
  },
  mode: 'development',
  devServer: {
    port: '3000',
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  },
  module: { 
    rules: [
      { 
        test: /(\.jsx|\.js)$/, 
        use: { 
          loader: "babel-loader", 
          options: { 
            presets: ["env", "react"] 
          } 
        }, 
        exclude: /node_modules/ 
      }    
    ]
  },
  plugins: [
    // 可以生成多个html文件
    new HtmlWebpackPlugin(), 
    new HtmlWebpackPlugin({
      title: 'asd', // 当title和template同时设定的情况下，以template的title为准。
      filename: 'admin.html',
      template: 'public/tpl/index.html', // 定义生成html文件的模板
      inject: 'head', // true(相当于‘body’)||'head'||'body'||false(不插入)
      favicon: 'assets/img/fav.png', // 设置favicon路径
      meta: {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'}, // 设置meta
      minify: {collapseWhitespace: false}, //html-minifier 参考https://github.com/kangax/html-minifier#options-quick-reference
      hash: true, //添加hash
      cache: true // 仅在文件发生变化的时候才编辑。
    })
  ]
}