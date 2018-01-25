const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const InterpolateHtmlPlugin = require("react-dev-utils/InterpolateHtmlPlugin");
const Hot = webpack.HotModuleReplacementPlugin;
const NamedPlugin = webpack.NamedModulesPlugin;

module.exports = (env = {}) => {
  // Use your env variables here
  return { objectGoesHere };
};

// paths
const projectPath = path.resolve(__dirname, "..");
const buildPath = path.join(projectPath, "build");
const srcPath = path.join(projectPath, "src");
const appPath = path.join(srcPath, "app");

// Webpack uses `publicPath` to determine where the app is being served from.
// In development, we always serve from the root. This makes config easier.
const publicPath = "";
// `publicUrl` is just like `publicPath`, but we will provide it to our app
// as %PUBLIC_URL% in `index.html` and `process.env.PUBLIC_URL` in JavaScript.
// Omit trailing slash as %PUBLIC_PATH%/xyz looks better than %PUBLIC_PATH%xyz.
const publicUrl = "";

module.exports = env => {
  // Use env.<YOUR VARIABLE> here:
  // console.log("NODE_ENV: ", env.NODE_ENV); // 'local'
  // console.log("is Production: ", env.production);

  const isProd = env && env.production ? true : false;
  const cssDev = ["style-loader", "css-loader", "sass-loader"];
  const cssProd = ExtractTextPlugin.extract({
    use: [
      {
        loader: "css-loader",
        options: {
          minimize: true,
          importLoaders: 1, // make sure sass-loader is used on imported assets
          localIdentName: "[local]---[hash:base64:5]",
          publicPath: "/dist"
        }
      },
      "sass-loader"
    ]
  });

  const cssConfig = isProd ? cssProd : cssDev;
  const sourceMapConfig = isProd ? "" : "source-map";

  return {
    entry: "./src/index.tsx",
    output: {
      path: buildPath,
      filename: "bundle.js",
      // This is the URL that app is served from. We use "/" in development.
      publicPath: publicPath
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "awesome-typescript-loader"
        },
        {
          enforce: "pre",
          test: /\.js$/,
          use: "source-map-loader"
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.scss$/,
          use: cssConfig
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/,
          include: projectPath,
          use: ["url-loader?name=images/[name].[ext]", "image-webpack-loader?bypassOnDebug"]
        },
        {
          test: /\.(woff2?)$/,
          use: "url-loader?limit=10000&name=fonts/[name].[ext]"
        },
        { test: /\.(ttf|eot)$/, use: "file-loader?name=fonts/[name].[ext]" }
      ]
    },
    plugins: [
      new InterpolateHtmlPlugin({
        PUBLIC_URL: publicUrl
        // You can pass any key-value pairs, this was just an example.
        // WHATEVER: 42 will replace %WHATEVER% with 42 in index.html.
      }),

      new HtmlWebpackPlugin({ template: "./index.html", hash: true }),
      new Hot(),
      new NamedPlugin(),
      new ExtractTextPlugin({
        filename: "style.css",
        disable: !isProd,
        allChunks: true
      })
    ],
    devtool: sourceMapConfig,
    devServer: {
      contentBase: buildPath,
      historyApiFallback: { disableDotRule: true },
      compress: true,
      hot: true,
      open: true,
      stats: "minimal"
    },
    resolve: {
      extensions: [".js", ".ts", ".tsx", ".css"]
    }
  };
};

//module.exports = config;
