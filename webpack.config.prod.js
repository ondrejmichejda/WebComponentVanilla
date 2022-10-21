const TerserPlugin = require("terser-webpack-plugin");
const path = require('path');

module.exports = {
    entry: {
        ondra: '/components/ondra/ondra.js',
        bannersht: '/components/bannersht/bannersht.js',
        transfactoringCalculator: '/components/TransfactoringCalculator/TransfactoringCalculator.js',
        swipeElement: '/components/swiper/swipeElement.js',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.md'],
    },
    output: {
        filename: '[name]/[name].bundle.js',
        // path: path.resolve(__dirname, 'wwwroot/js'),
        clean: true
    },
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                parallel: true,
                minify: TerserPlugin.uglifyJsMinify,
                // `terserOptions` options will be passed to `uglify-js`
                // Link to options - https://github.com/mishoo/UglifyJS#minify-options
                terserOptions: {},
            }),
        ],
    },
};