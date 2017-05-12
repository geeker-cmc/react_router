var webpack=require('webpack');
var WebpackDevServer=require('webpack-dev-server');
var config=require('./webpack.config');
process.env.NODE_ENV='production';
new WebpackDevServer(webpack(config),{
	publicPath:'/build/',
	hot:true,
	historyApiFallback:true
}).listen(9100,'localhost',function(err,result){
	if(err){
		console.log(err)
	}
	console.log('Lintening at localhost:9100')
})