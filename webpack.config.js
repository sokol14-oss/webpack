const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry:'./src/index.js',
    output: {
       path:path.resolve(__dirname,'dist'),
       filename: "app.bundle.js",
},
module: {
    rules: [
        {
            test: /\.txt$/,
            loader: "raw-loader"
        },
      {
        test: /\.css$/,
        use: [
            MiniCSSExtractPlugin.loader,
            "css-loader"
        ]
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: path.resolve('path/to/loader.js'),
            options: {
              /* ... */
            },
          },
        ],
      },

    ]
},
plugins: [
    new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "main.html"
    }),
    new MiniCSSExtractPlugin()
]
};