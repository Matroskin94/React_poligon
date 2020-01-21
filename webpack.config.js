const path = require('path');

module.exports = {
    entry: __dirname+'/src/App.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/,
            }
        ]
    },
    devServer: {
        publicPath: "/",
        contentBase: "./dist",
        hot: true
    },
};