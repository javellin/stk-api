import * as http from 'http';
import app from './app';

const server = http.createServer(app);

const PORT = 5000;

server.listen(PORT);

server.on('listening', () => {
  console.info('server up listening');
});
