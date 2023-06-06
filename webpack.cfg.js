// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: './dist/main.js'
    },
    mode: 'development',
    
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"]
            }
        ]
    }
};

// module.rules = {
//     use: ['style-loader','css-loader'],
//     test: /\.css$/
// };