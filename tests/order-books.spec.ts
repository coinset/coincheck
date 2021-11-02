import { getOderBooks } from '@/order-books'

describe('getOderBooks', () => {
  it('should return right interface', async () => {
    const expected = await getOderBooks()
    const { asks, bids } = expected

    expect.assertions(9)

    expect(Object.keys(expected).sort()).toEqual(['asks', 'bids'].sort())

    expect(Array.isArray(asks)).toBeTruthy()
    expect(Array.isArray(bids)).toBeTruthy()
    expect(typeof asks[0] === 'object').toBeTruthy()
    expect(typeof asks[0][0] === 'number').toBeTruthy()
    expect(typeof asks[0][1] === 'number').toBeTruthy()
    expect(typeof bids[0] === 'object').toBeTruthy()
    expect(typeof bids[0][0] === 'number').toBeTruthy()
    expect(typeof bids[0][1] === 'number').toBeTruthy()
  })
})
