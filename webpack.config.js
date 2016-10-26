/**
 * Created by Petzch on 21.10.2016.
 */

var webpack = require('webpack');

module.exports = {
    //sequence in entry array is relevant
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './app/app.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        /*https://til.hashrocket.com/posts/38d2d28b6b-better-module-imports-with-webpack-aliases*/
        alias: {
            Main: 'app/components/Main.jsx',
            Nav: 'app/components/Nav.jsx',
            Weather: 'app/components/Weather.jsx',
            WeatherForm: 'app/components/WeatherForm.jsx',
            WeatherMessage: 'app/components/WeatherMessage.jsx',
            About: 'app/components/About.jsx',
            Examples: 'app/components/Examples.jsx',
            openWeatherMap: 'app/api/openWeatherMap.jsx',
            fixerIo: 'app/api/fixerIo.jsx',
            currencyManager: 'app/api/currencyManager.jsx',
            Currency: 'app/components/Currency.jsx',
            CurrencyMessage: 'app/components/CurrencyMessage.jsx',
            CurrencySelectionList: 'app/components/CurrencySelectionList.jsx',
            CurrencyForm: 'app/components/CurrencyForm.jsx',
            ErrorModal: 'app/components/ErrorModal.jsx',
            CustomReactAppCSS: 'app/styles/app.css',
            CustomReactAppSASS: 'app/styles/app.scss'
        },
        extensions: ['','.js','.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            },
            {
                loader: "url-loader",
                test: /\.png$/,
                query: { mimetype: "image/png" }
            }

        ]
    },
    devtool: 'source-map'
};
