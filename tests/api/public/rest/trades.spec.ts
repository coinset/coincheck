import { ALL_EXCHANGE_RATE_PAIRS } from '@/api/public/rest/exchange_rate'
import { fetchTrades } from '@/api/public/rest/trades'

describe('fetchTrades', () => {
  it('should return right interface', async () => {
    const { success, pagination, data } = await fetchTrades({ pair: 'btc_jpy' })
    const { limit, order, starting_after, ending_before } = pagination

    expect(success).toBeBoolean()
    expect(pagination).toBeObject()
    expect(data).toBeArray()

    data.forEach(({ id, amount, rate, pair, order_type, created_at }) => {
      expect(id).toBeNumber()
      expect(amount).toBeNumber()
      expect(rate).toBeNumber()
      expect(pair).toBeOneOf(ALL_EXCHANGE_RATE_PAIRS)
      expect(order_type).toBeOneOf(['sell', 'buy'])
      expect(created_at).toBeAfter(new Date('2000/1/1'))
    })

    expect(limit).toBeNumber()
    expect(order).toBeOneOf(['asc', 'desc'])
    expect(starting_after).toBeNumberOrNull()
    expect(ending_before).toBeNumberOrNull()
  })
})
