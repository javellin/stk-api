import { createRequestHandler } from 'zod-http-schemas/server';
import { apiSchema } from './apiSchema';
import { StockItem } from '../domain/entities/stock';
import { getStock } from '../domain/operations/stock/stock.controller';
import {
  GetStockOutcomeStatus,
  GetStockResult,
} from '../domain/operations/stock/stock.deriver';
import { GetStockResponseBody } from '../domain/operations/stock/stock.validation';

export const handleGetStock = createRequestHandler(
  apiSchema,
  'GET /stock',
  async (req, res) => {
    const result = await getStock();

    const outcomeStatusCodeMap: Record<
      GetStockResponseBody['outcome'],
      number
    > = {
      [GetStockOutcomeStatus.SUCCESS]: 200,
    };

    res.status(outcomeStatusCodeMap[result.outcome]).json(result);
  },
);
