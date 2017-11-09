const path = require("path");
const include = path.resolve(__dirname, '../src');

module.exports = {
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: [
          'style-loader',
          'raw-loader'
        ],
        include,
        exclude: path.resolve(__dirname, '../node_modules'),
      },
      // { test: /\.json?$/, loaders: ['json'], include },
      {
        test: /\.ts(x?)$/,
        use: [
          'ts-loader',
        ],
        include,
        exclude: path.resolve(__dirname, '../node_modules'),
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug'
        ]
      },
    ],
  },
  // externals: {
  //   "jsdom": "window",
  //   "cheerio": "window",
  //   "react/lib/ExecutionEnvironment": true,
  //   "react/lib/ReactContext": "window",
  //   "react/addons": true,
  // }
};
