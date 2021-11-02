import { trades } from '@/api/public/trades'

describe('trades', () => {
  it('should return right interface', async () => {
    const expected = await trades({ pair: 'btc_jpy' })
    const { success, pagination, data } = expected
    const { limit, order, starting_after, ending_before } = pagination
    const { id, amount, rate, pair, order_type, created_at } = data[0]

    const fields = ['success', 'pagination', 'data']
    fields.forEach((field) => {
      expect(Object.keys(expected)).toContain(field)
    })

    expect(success).toEqual(expect.any(Boolean))
    expect(pagination).toEqual(expect.any(Object))
    expect(data).toEqual(expect.any(Object))
    expect(limit).toEqual(expect.any(Number))
    expect(order).toEqual(expect.any(String))
    expect(starting_after).toBeNull()
    expect(id).toEqual(expect.any(Number))
    expect(amount).toEqual(expect.any(Number))
    expect(ending_before).toBeNull()
    expect(rate).toEqual(expect.any(Number))
    expect(pair).toEqual(expect.any(String))
    expect(order_type).toEqual(expect.any(String))
    expect(created_at).toEqual(expect.any(Date))
  })
})
