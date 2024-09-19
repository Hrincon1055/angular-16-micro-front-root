const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");
let modelsAndControls;
let publicPathUrl;
let enviroment = process.env.NODE_ENVIROMENT;

switch (enviroment) {
  case "develop":
    modelsAndControls = "http://localhost:4201/remoteEntry.js";
    publicPathUrl = "http://localhost:4200/";
    break;
  case "qa":
    modelsAndControls = "https://qa.example.com/remoteEntry.js";
    publicPathUrl = "http://localhost:4200/";
    break;
  case "production":
    console.log("webpack.config LINE 20 => production");
    modelsAndControls =
      "modelsAndControls@https://gregarious-bubblegum-562132.netlify.app/remoteEntry.js";
    publicPathUrl = "https://bucolic-dango-87ca31.netlify.app/";
    break;
  default:
    console.log("webpack.config LINE 25 => default");
    modelsAndControls = "http://localhost:4201/remoteEntry.js";
    publicPathUrl = "http://localhost:4200/";
    break;
}
console.log("webpack.config LINE 31 =>", { modelsAndControls, publicPathUrl });
const moduleFederationConfig = withModuleFederationPlugin({
  remotes: {
    modelsAndControls: modelsAndControls,
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});

moduleFederationConfig.output.publicPath = publicPathUrl;
module.exports = moduleFederationConfig;
