const path = require("path");

module.exports = {
  mode: "development", // or 'production'
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "./dist/js"),
    filename: "dims-webpack.js", // <--- Will be compiled to this single file
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "ts-loader",
          },
          {
            loader: "babel-loader",
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
