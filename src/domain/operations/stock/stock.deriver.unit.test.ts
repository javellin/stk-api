import { getStock } from './stock.controller';

describe('getGreeting', () => {
  it('should return greeting "Hello World!"', async () => {
    const result = await getStock();

    expect(result.outcome).toBeDefined();
    expect(result.outcome).toBe('SUCCESS');
    expect(result.stock).toEqual([
      {
        quantity: 10,
        id: '1',
        type: '',
      },
    ]);
  });
});
