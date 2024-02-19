import { z } from 'zod-http-schemas';
import { stockItemSchema } from '../../entities/stock';

//POST /stock
export const addStockItemRequestBodySchema = z.object({
  stock: stockItemSchema,
});

export const addStockItemResponseBodySchema = z.object({
  outcome: z.string(),
  stock: stockItemSchema,
});

export type AddStockItemRequestBody = z.infer<
  typeof addStockItemRequestBodySchema
>;

export type AddStockItemResponseBody = z.infer<
  typeof addStockItemResponseBodySchema
>;

//GET /stock
export const getStockResponseBodySchema = z.object({
  outcome: z.string(),
  stock: z.array(stockItemSchema),
});

export type GetStockResponseBody = z.infer<typeof getStockResponseBodySchema>;
