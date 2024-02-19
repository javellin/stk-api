import { GetStockResult, deriveGetStockOutcome } from './stock.deriver';
import { GetStockResponseBody } from './stock.validation';

export const getStock = async (): Promise<GetStockResponseBody> => {
  //   const existingOrder = await ordersRepo.getOrder(orderId);

  const result = deriveGetStockOutcome();

  return result;
};
