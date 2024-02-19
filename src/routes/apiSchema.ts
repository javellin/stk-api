import { createHttpSchema } from 'zod-http-schemas/server';

import {
  addStockItemRequestBodySchema,
  addStockItemResponseBodySchema,
  getStockResponseBodySchema,
} from '../domain/operations/stock/stock.validation';

export const apiSchema = createHttpSchema({
  'POST /stock': {
    requestBody: addStockItemRequestBodySchema,
    responseBody: addStockItemResponseBodySchema,
  },
  'GET /stock': {
    responseBody: getStockResponseBodySchema,
  },
});
