const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/",
  },
  devtool: "eval-source-map",
  devServer: {
    // If you have a separate 'public' folder for static assets (like images, fonts)
    // that are NOT processed by Webpack, uncomment and adjust this:
    // static: {
    //   directory: path.resolve(__dirname, 'public'),
    //   publicPath: '/',
    // },
    watchFiles: [
      "./src/**/*",
      // If you uncommented 'static' above and had a 'public' folder, you might add: "./public/**/*"
    ],
    hot: true,
    open: true,
    port: 0,
    // historyApiFallback: true, // Useful for single-page applications (SPAs) with client-side routing
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      /* If there are images in HTML as src of <img>
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      */

      /* If there are images in JS files or you want to handle other asset types.
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      */
    ],
  },
};