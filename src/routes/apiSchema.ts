import { createHttpSchema } from 'zod-http-schemas/server';

import {
  addStockItemRequestBodySchema,
  addStockItemResponseBodySchema,
} from '../domain/operations/stock/stock.validation.js';

export const apiSchema = createHttpSchema({
  'POST /stock': {
    requestBody: addStockItemRequestBodySchema,
    responseBody: addStockItemResponseBodySchema,
  },
});
