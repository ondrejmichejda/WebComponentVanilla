const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        ondra: '/components/ondra/ondra.js',
        bannersht: '/components/bannersht/bannersht.js',
        transfactoringCalculator: '/components/TransfactoringCalculator/TransfactoringCalculator.js',
    },
    resolve: {
        extensions: ['.js'],
    },
    output: {
        filename: '[name]/[name].bundle.js',
        // path: path.resolve(__dirname, 'wwwroot/js'),
        clean: true
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: '**/*/readme.md', to: "bannersht/readme.md" },
            ],
        }),
    ],
    mode: 'development',
};