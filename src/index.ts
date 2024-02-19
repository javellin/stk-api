import express, { type Application } from 'express';
import compression from 'compression';
import { decorateExpressRouter } from 'zod-http-schemas/server';
import helmet from 'helmet';
import http from 'http';
import { handlePostStockItem } from './routes/handlePostStockItem.js';
import { apiSchema } from './routes/apiSchema.js';

const app: Application = express();
const server = http.createServer(app);

app.use(compression());
app.use(
  helmet({
    contentSecurityPolicy: false,
  }),
);
app.use(express.json());

const apiRouter = decorateExpressRouter({ schema: apiSchema });

app.post('/stock', handlePostStockItem);

const PORT = 5000;

server.listen(PORT);

server.on('listening', () => {
  console.info('server up listening');
});
