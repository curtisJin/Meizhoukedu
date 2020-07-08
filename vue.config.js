const path = require('path');//引入路径模块

function pathHander(pathUrl){
    return path.join(__dirname,pathUrl)
}

module.exports = {
    //配置路径别名
    chainWebpack : config =>{
        config.resolve.alias
            .set('@',pathHander('./src'));
    }
}