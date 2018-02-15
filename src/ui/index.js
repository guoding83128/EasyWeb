import app from '@server/app';
import http from 'http';
import path from 'path';

const appRootDir = path.resolve(path.resolve(__dirname), '../');
const server = http.createServer(app(appRootDir));

server.listen(process.env.PORT || 3000, (error) => {
  if (error) {
    console.log(error)
  }
  
  console.log('🚀 started')
});

// let currentApp = app;

// if (module.hot) {
//   console.log('✅  Server-side HMR Enabled!');

//   module.hot.accept('./server/app', () => {
//     console.log('🔁  HMR Reloading `./server`...');
//     server.removeListener('request', currentApp);
//     const newApp = require('./server/app').default;
//     server.on('request', newApp);
//     currentApp = newApp;
//   });
// }
