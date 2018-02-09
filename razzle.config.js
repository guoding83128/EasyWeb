const path = require('path');

module.exports = {
  modify: (config, {target, dev}, webpack) => {
    config.resolve.alias = {
      '@ui': path.resolve(__dirname, 'src/ui'),
      '@server': path.resolve(__dirname, 'src/server'),
      '@client': path.resolve(__dirname, 'src/client')
    };
    return config;
  }
};
