var gulp=require("gulp"),
	webpack=require("webpack"),
	
	webpackConfig=require("./webpack.config.js"),
	webserver=require("gulp-webserver");
	
	
	gulp.task("build",function(callback){
		// gulp.src("./main.js").
		// pipe(webpack(Object.create(webpackConfig))).
		// pipe(gulp.dest("build"))
		webpack(Object.create(webpackConfig)).run(function(err,stats){

		})
		callback();
	})
	
	
	gulp.task("watch",function(){
		gulp.watch("./**/**/**.less",['build']);
	})
	gulp.task("server",function(){
		gulp.src("./")
		.pipe(webserver({
			livereload:true,
			directoryListing:true,
			open:true
		}))
	});
	gulp.task("default",["watch","server",'build'])