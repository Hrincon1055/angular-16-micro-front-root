export const environment = {
  production: false,
  urlsApi: {
    url: 'http://localhost:3000/api',
  },
  urlsMicro: {
    modelsAndControls: {
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './ModelsAndControlsModule',
    },
  },
};
