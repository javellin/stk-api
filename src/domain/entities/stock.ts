import { z } from 'zod-http-schemas';

export const stockItemSchema = z.object({
  id: z.string().optional(),
  quantity: z.number(),
  type: z.string(),
});

export type StockItem = z.infer<typeof stockItemSchema>;
