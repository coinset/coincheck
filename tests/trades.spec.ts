import { getAPITrades } from '@/trades'

describe('getAPITrades', () => {
  it('should return right interface', async () => {
    const expected = await getAPITrades('btc_jpy')
    const { success, pagination, data } = expected
    const { limit, order, starting_after, ending_before } = pagination
    const { id, amount, rate, pair, order_type, created_at } = data[0]

    expect.assertions(14)

    expect(Object.keys(expected).sort()).toEqual(
      ['success', 'pagination', 'data'].sort()
    )

    expect(typeof success === 'boolean').toBeTruthy()
    expect(typeof pagination === 'object').toBeTruthy()
    expect(typeof data === 'object').toBeTruthy()
    expect(typeof limit === 'number').toBeTruthy()
    expect(typeof order === 'string').toBeTruthy()
    expect(typeof starting_after === 'object').toBeTruthy()
    expect(typeof id === 'number').toBeTruthy()
    expect(typeof amount === 'number').toBeTruthy()
    expect(typeof ending_before === 'object').toBeTruthy()
    expect(typeof rate === 'number').toBeTruthy()
    expect(typeof pair === 'string').toBeTruthy()
    expect(typeof order_type === 'string').toBeTruthy()
    expect(typeof created_at === 'object').toBeTruthy()
  })
})
