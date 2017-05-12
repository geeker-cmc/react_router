var webpack=require("webpack");
var htmlWebpckPlugin=require("html-webpack-plugin");
var extractTextWebpackPlugin=require("extract-text-webpack-plugin");
var lessExtract=new extractTextWebpackPlugin("stylesheet/[hash]-bundle.css");
var sassExtract=new extractTextWebpackPlugin("stylesheet/[hash]-bundle.css");
var path=require('path');
new webpack.DefinePlugin({
    "process.env": {
        NODE_ENV: JSON.stringify("production")
    }
});
module.exports={
	entry:path.resolve(__dirname,'./main.js'),
	output:{
          path:path.resolve(__dirname,"./build"),
          filename:"[name]-bundle.js"
	},
	module:{
		rules:[
		  {
		  	test:/\.less$/,
		  	use:lessExtract.extract({
		  		fallback:"style-loader",
		  		use:['css-loader','less-loader']
		  	})
		  },
		  {
		  	test:/\.scss$/,
		  	use:sassExtract.extract({
		  		fallback:"style-loader",
		  		use:['css-loader','sass-loader']
		  	})
		  },
		  {
		  	test:/\.html$/,
		  	loader:"html-loader"
		  },
		  {
		  	test:/\.js$/,
		  	exclude:/node_modules/,
		  	use:{
		  		loader:'babel-loader',
		  		options:{
		  			presets:['es2015','react']
		  		}
		  	}
		  },
		  {
		  	test:/\.(png|ipg|gif)$/,
		  	loader:'url-loader?limit=8192&name=./img/[name].[ext]'
		  }
		]
	},
	plugins:[
       lessExtract,
       sassExtract,
        new htmlWebpckPlugin({
        	template:'./index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
	]
	//配置webpack-dev-server
	// devServer:{
	// 	contentBase:'./',
	// 	host:'localhost',
	// 	port:9100,
	// 	inline:true,
	// 	hot:true
	// }
}