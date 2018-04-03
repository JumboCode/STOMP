var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    entry: ['./app/index.js'],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'app'),
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
	    {
	    	test: /\.css$/,
		loader: 'style!css-loader?modules&importLoaders=1&localIndentName=[name]__[local]__[hash:base64:5]'
	    }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/public/index.html',
            filename: 'index.html',
            inject: 'body',
        }),
    ],
};
