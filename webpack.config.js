// Configuration details for webpack build
// Node thing; a way to expose something to another file

// __dirname - contains path to the current location

const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

//Advantage of exporting function instead of object is that
//function is then called with some arguments and with these
//arguments we can check if the build is for development or
//for production. The argument value is given upon running
//the "webpack -p" command
module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin("styles.css");

    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        mode: 'development',
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/, //Only files ending with .js
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? "source-map" : "inline-source-map",
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    };
};
