module.exports = {
    entry:'./src/main.js',//指定打包的入口文件
    output:{
        path : __dirname + '/dist',//注意webpack1.14.0要求这个路径是绝对路劲__dirnam
        filename:'build.js'
    }
}