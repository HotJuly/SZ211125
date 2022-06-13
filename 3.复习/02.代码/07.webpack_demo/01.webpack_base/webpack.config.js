const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
    entry:"./src/main.js",
    output:{
        filename:"[name].js",
        path:resolve( __dirname , './build')
    },
    /*  
        面试题:请问loader和plugin的区别?
            webpack非常的弱,他只认识js和json文件,其余文件都没有打包编译的能力,例如:less
            假设现在需要编译less文件,就必须使用官方提供的less编译包,但是webpack与less语言不通,
                webpack无法直接通过less包来打包less文件,所以需要less-loader的配合
                    loader其实就是中间的跑腿,他没有编译文件的能力

            插件一般不具备编译文件的功能,它主要是对webpack开发人员起到辅助作用,提供一些特殊的完整的功能
    */
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
    mode:"development",
    devServer:{
        port:8888,
        proxy:{
            '/v2/api':{
                target:"....",
                pathRewrite:{
                    '/v2/api':''
                }
            }
        }
    },
    resolve:{
        extensions: ['.js', '.json', '.vue', '.less'],
        alias:{
            "@":resolve(__dirname,"./src")
        }
    }
}