const path = require("path")
const merge = require("webpack-merge")
const common = require("./webpack.common.js")

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 300,
    //If watching does not work for you,
    //try out this option.
    //Watching does not work with NFS and machines in VirtualBox.
    poll: 1000,
  },
  devServer: {
    port: 9000,
    contentBase: path.join(__dirname, "dist"),
    index: 'module_1.html',
    open: true,
    compress: true,
  },
})
