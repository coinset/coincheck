import { orderBooks } from '@/api/public/order_books'

describe('orderBooks', () => {
  it('should return right interface', async () => {
    const expected = await orderBooks()
    const { asks, bids } = expected

    expect(Object.keys(expected)).toContain('asks')
    expect(Object.keys(expected)).toContain('bids')

    expect(asks).toEqual(expect.any(Array))
    expect(bids).toEqual(expect.any(Array))
    expect(asks[0]).toEqual(expect.any(Array))
    expect(bids[0]).toEqual(expect.any(Array))
    expect(asks[0][0]).toEqual(expect.any(Number))
    expect(asks[0][1]).toEqual(expect.any(Number))
    expect(bids[0][0]).toEqual(expect.any(Number))
    expect(bids[0][1]).toEqual(expect.any(Number))
  })
})
