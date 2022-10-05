const path = require("path");
module.exports = {
  mode: "development",
  entry: {
    dd: "./src/index.js",
  },
  output: {
    path: path.resolve("./dist"),
    // filename: "[name].[id].[contenthash].bundle.js",
    filename: (pathData) => {
      console.log(JSON.stringify(pathData.chunk.name));
      console.log(JSON.stringify(pathData.chunk.id));
      return pathData.chunk.name === "main" ? "[name].js" : "[name]/[name].js";
    },
  },
};
