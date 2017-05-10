const path = require("path");
const include = path.resolve(__dirname, '../');

module.exports = {
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  module: {
    loaders: [
      { test: /\.css?$/, loaders: ['style', 'raw'], include },
      // { test: /\.json?$/, loaders: ['json'], include },
      { test: /\.ts(x?)$/, loader: "babel-loader!ts-loader", include },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
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