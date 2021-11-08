import { fetchOrderBooks } from '@/api/public/rest/order_books'

describe('fetchOrderBooks', () => {
  it('should return right interface', async () => {
    const { asks, bids } = await fetchOrderBooks()

    const expectPriceAmount = (value: [number, number][]) => {
      expect(value).toBeArray()

      value.forEach((priceAmount) => {
        expect(priceAmount).toBeArray()
        expect(priceAmount).toHaveLength(2)
        expect(priceAmount[0]).toBeNumber()
        expect(priceAmount[1]).toBeNumber()
      })
    }

    expectPriceAmount(asks)
    expectPriceAmount(bids)
  })
})
