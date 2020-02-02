const webpack = require("webpack")
const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  context: path.resolve(__dirname, "./src"),
  entry: {
    // create entry point (and lib with name 'module1' from ./module_1/index.js
    module1: "./module_1",
  }, // string | object | array
  // Here the application starts executing
  // and webpack starts bundling

  output: {
    path: path.resolve(__dirname, "dist"),
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    filename: "[name].js",
    library: "[name]",
    // the name of the exported library
    publicPath: "", // string
    // the url to the output directory resolved relative to the HTML page

    libraryTarget: "umd", // universal module definition
    // the type of the exported library
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "module_1.html", // target file -> dist/module_1.html
      inject: true,
      chunks: ["module1"],
      template: "module_1/index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.WatchIgnorePlugin([/\.js$/, /\.d\.ts$/]),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
}
