
const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var InterpolateHtmlPlugin = require("react-dev-utils/InterpolateHtmlPlugin");

module.exports = (env = {}) => {
    // Use your env variables here
    return { objectGoesHere }
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

module.exports = env =>{
     // Use env.<YOUR VARIABLE> here:
  console.log('NODE_ENV: ', env.NODE_ENV) // 'local'
  console.log('is Production: ', env.production) 

  const cssDev = ['style-loader','css-loader','sass-loader'];

  if(env.production){

  }

  return  {
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
          test: /\.(png|jpeg|jpg|gif|svg)$/,
          include: projectPath,
          loader: "url-loader"
        },
        {
          test: /\.tsx?$/,
          loader: "awesome-typescript-loader"
        },
        {
          enforce: "pre",
          test: /\.js$/,
          loader: "source-map-loader"
        },
        {
          test: /\.css$/,
          loader: "style-loader!css-loader"
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            use: [
              {
                loader: "css-loader",
                options: {
                  minimize: true,
                  importLoaders: 1, // make sure sass-loader is used on imported assets
                  localIdentName: "[local]---[hash:base64:5]"
                }
              },
              "sass-loader"
            ]
          })
        },
        {
          test: /\.(png|jpeg|jpg|gif|svg)$/,
          include: projectPath,
          loader: "url-loader"
        }
      ]
    },
    plugins: [
      new InterpolateHtmlPlugin({
        PUBLIC_URL: publicUrl
        // You can pass any key-value pairs, this was just an example.
        // WHATEVER: 42 will replace %WHATEVER% with 42 in index.html.
      }),
      new HtmlWebpackPlugin({ template: "./index.html" }),
      new ExtractTextPlugin("style.css")
    ],
    devtool: "source-map",
    devServer: {
      contentBase: buildPath,
      historyApiFallback: {disableDotRule: true}
    },
    resolve: {
      extensions: [".js", ".ts", ".tsx", ".css"]
    }
  };

}



//module.exports = config;
