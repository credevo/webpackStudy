const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports={
    mode : 'development',
    entry : {
        main : './src/app.js',
    },
    module : {
        rules : [
            {
                test : /\.css$/ , 
                use:['style-loader', 'css-loader']
            },
            {
                test : /\.png$/, 
                use:[
                    {
                        loader : 'file-loader',
                        options : {
                            // publicPath : '../dist'
                            name : '[name].[ext]?[hash]', // 파일명과 확장자으로 쓰고 싶을때
                        },
                    }
                ]
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : './src/index.html'
        }),
        new CleanWebpackPlugin(), // clean build folder : plugin
    ],
    output : {
        path : path.resolve('./dist'), 
        filename : '[name].js',
    }
}