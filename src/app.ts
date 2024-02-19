import * as express from 'express';
import * as compression from 'compression';
import { decorateExpressRouter } from 'zod-http-schemas/server';
import helmet from 'helmet';
import { handlePostStockItem } from './routes/handlePostStockItem';
import { apiSchema } from './routes/apiSchema';
import { handleGetStock } from './routes/handleGetStock';

const app: express.Application = express();
app.use(compression());
app.use(
  helmet({
    contentSecurityPolicy: false,
  }),
);
app.use(express.json());

const apiRouter = decorateExpressRouter({ schema: apiSchema });

app.use('/', apiRouter);
apiRouter.post('/stock', handlePostStockItem);
apiRouter.get('/stock', handleGetStock);

export default app;
