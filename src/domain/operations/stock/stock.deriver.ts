import { StockItem } from '../../entities/stock';
import { GetStockResponseBody } from './stock.validation';

export enum GetStockOutcomeStatus {
  SUCCESS = 'SUCCESS',
}

export type GetStockResult = {
  outcome: GetStockOutcomeStatus;
  stock: StockItem[];
};

export const deriveGetStockOutcome = (): GetStockResponseBody => {
  return {
    outcome: GetStockOutcomeStatus.SUCCESS,
    stock: [
      {
        quantity: 10,
        id: '1',
        type: '',
      },
    ],
  };
};
