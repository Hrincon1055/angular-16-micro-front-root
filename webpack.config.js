const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");
let modelsAndControls;
let publicPathUrl;
let enviroment = process.env.npm_lifecycle_script
  .split(" ")
  .pop()
  .trim()
  .toLowerCase();

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
    modelsAndControls = "http://localhost:4201/remoteEntry.js";
    publicPathUrl = "http://localhost:4200/";
    break;
  default:
    modelsAndControls = "http://localhost:4201/remoteEntry.js";
    publicPathUrl = "http://localhost:4200/";
    break;
}
const moduleFederationConfig = withModuleFederationPlugin({
  remotes: {
    modelsAndControls: "http://localhost:4201/remoteEntry.js",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});

moduleFederationConfig.output.publicPath = "http://localhost:4200/";
module.exports = moduleFederationConfig;
