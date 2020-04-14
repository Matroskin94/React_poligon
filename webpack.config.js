const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src', 'App.tsx'),
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
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'fonts/'
                    }
                  }
                ]
            },
        ]
    },
    devServer: {
        publicPath: "/",
        contentBase: "./dist",
        stats: "minimal",
        hot: true
    },
    resolve: {
        alias: {
            src: path.join(__dirname, './src')
        },
        modules: ["node_modules"],
        extensions: ['.ts', '.tsx', '.js'],
    }
};