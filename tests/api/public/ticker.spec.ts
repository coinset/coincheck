import { fetchTicker } from '@/api/public/ticker'

describe('fetchTicker', () => {
  it('should request to /api/ticker', async () => {
    const { last, bid, ask, high, low, volume, timestamp } = await fetchTicker({
      pair: 'btc_jpy'
    })

    expect(last).toBeNumber()
    expect(bid).toBeNumber()
    expect(ask).toBeNumber()
    expect(high).toBeNumber()
    expect(low).toBeNumber()
    expect(volume).toBeNumber()
    expect(timestamp).toBeNumber()
  })
})
