const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
    Tree shaking(树摇)
        问题:在没有实现树摇之前,当前项目依赖于某个模块,
            该模块中无论是用到还是没用到的代码,都会被添加到最终打包的index.js中
            最终,无形中增加了项目的体积,导致需要的带宽增加,请求时间变长,最终导致白屏时间变久

        流程:
            1.将mode属性修改为production(生产环境)即可
                他会自动启动TerserPlugin

        注意:
            1.想使用树摇,必须使用ES6模块化语法
*/
module.exports ={
    entry:"./src/main.js",
    output:{
        filename:"[name].js",
        path:resolve( __dirname , './build')
    },
    module:{
        rules:[
            {
                test:/\.less$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./public/index.html"
        })
    ],
    // 开发环境编译 development
    // 生产环境编译 production
    mode:"production",
}