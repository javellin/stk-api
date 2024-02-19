import { createRequestHandler } from 'zod-http-schemas/server';
import { apiSchema } from './apiSchema';

export const handlePostStockItem = createRequestHandler(
  apiSchema,
  'POST /stock',
  async (req, res) => {
    const body = req.body.stock;

    res.json({
      outcome: 'STRING',
      stock: { ...body },
    });
  },
);
