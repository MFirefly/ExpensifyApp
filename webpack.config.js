// Configuration details for webpack build
// Node thing; a way to expose something to another file

// __dirname - contains path to the current location

const path = require('path');
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

process.env.NODE_ENV = process.env.NODE_ENV || "development";

if (process.env.NODE_ENV === 'test') {
    require('dotenv').config({ path: '.env.test' });
} else if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({ path: '.env.development' });
}

//Advantage of exporting function instead of object is that
//function is then called with some arguments and with these
//arguments we can check if the build is for development or
//for production. The argument value is given upon running
//the "webpack -p" command
module.exports = (env) => {
    const isProduction = env === "production";
    const CSSExtract = new ExtractTextPlugin("styles.css");

    return {
        entry: ['babel-polyfill', './src/app.js'],
        output: {
            path: path.join(__dirname, "public", "dist"),
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
            CSSExtract,
            new webpack.DefinePlugin({
                'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)
            })
        ],
        devtool: isProduction ? "source-map" : "inline-source-map",
        devServer: {
            contentBase: path.join(__dirname, "public"),
            historyApiFallback: true,
            publicPath: "/dist/"
        }
    };
};
