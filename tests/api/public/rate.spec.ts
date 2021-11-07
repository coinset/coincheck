import { fetchRate } from '@/api/public/rate'

describe('fetchRate', () => {
  it('should return right interface', async () => {
    const { rate } = await fetchRate({ pair: 'btc_jpy' })

    expect(rate).toBeNumber()
  })
})
