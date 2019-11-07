module.exports = {
    entry: ['./app/main.js'],
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        port: 3000,
        hot: true,   
        open: true,
        historyApiFallback: true,
        open: 'http://localhost:3000/login',
        publicPath: "/"
    },
    devtool: 'inline-source-map'
};