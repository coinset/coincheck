import { getAPITicker } from '@/ticker'

describe('getAPITicker', () => {
  it('should return right interface', async () => {
    const expected = await getAPITicker()
    const { ask, last, bid, high, low, volume, timestamp } = expected

    expect.assertions(8)

    expect(Object.keys(expected).sort()).toEqual(
      ['last', 'bid', 'ask', 'high', 'low', 'volume', 'timestamp'].sort()
    )

    expect(typeof ask === 'number').toBeTruthy()
    expect(typeof last === 'number').toBeTruthy()
    expect(typeof bid === 'number').toBeTruthy()
    expect(typeof high === 'number').toBeTruthy()
    expect(typeof low === 'number').toBeTruthy()
    expect(typeof volume === 'number').toBeTruthy()
    expect(typeof timestamp === 'number').toBeTruthy()
  })
})
