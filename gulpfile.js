var gulp = require('gulp');
var gulpLoadPlugins= require('gulp-load-plugins');
var plugins = gulpLoadPlugins();
var shell = require('gulp-shell');

gulp.task("clean",function() {
    return gulp.src("./dst/*")
    .pipe(plugins.clean());           //plugins为加载的gulp-load-plugins插件,它可以自动加载项目依赖(package.json定义)
});

gulp.task("css",["clean"],function() {
    return gulp.src(["public/**/*.css","!public/**/*.min.css"])
    .pipe(plugins.minifyCss({compatibility: "ie8"}))
    .pipe(gulp.dest("./dst/"));      
});

gulp.task("js",["clean"],function() {
    return gulp.src(["public/**/*.js","!public/**/*.min.js"])
    .pipe(plugins.uglify())
    .pipe(gulp.dest("./dst/"));
});

gulp.task("html",["clean"],function() {
    return gulp.src("public/**/*.html")
    .pipe(plugins.minifyHtml())
    .pipe(gulp.dest("./dst/"));
});

gulp.task("updatePublicDir",["css","js","html"],function() {
    //console.log("gulp minify finished.");

    gulp.src("./dst").pipe(plugins.shell([
        "cp -r ./dst/* ./public/"
    ])).pipe(plugins.shell([
        "rm  -rf ./dst"
    ]));

    //console.log("gulp remove ./dst");

});

// The default task (called when you run `gulp` from cli)

gulp.task('default', ["updatePublicDir"], shell.task([
    'rm -rf ../www.wangyn.net-node/public',
    'cp -r ./public ../www.wangyn.net-node/'
]));

//shell命令中　cp : 如果目标路径中有要复制的文件或文件夹，则直接覆盖它
