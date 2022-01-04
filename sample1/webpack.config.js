const path = require('path');

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
                            publicPath : '../dist'
                        },
                    }
                ]
            }
        ]
    },
    output : {
        path : path.resolve('./dist'), 
        filename : '[name].js',
    }
}