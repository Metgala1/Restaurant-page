const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { type } = require("os");

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    devtool: "eval-source-map",
    devServer: {
    watchFiles: ["./src/template.html"],
             },
    plugins: [
        new HtmlWebpackPlugin({
          template: "./src/template.html",
        }),
      ],
    module: {
        rules: [
            {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(jpeg|png|jpg|svg|webp)$/i,
                type: "asset/resource",
            },
            {
                test: /\.html$/i,
                loader: "html-loader"

            }
        ]
    }
   
}