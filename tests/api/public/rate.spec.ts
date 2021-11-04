import { fetchRate } from '@/api/public/rate'

describe('fetchRate', () => {
  it('should return right interface', async () => {
    const result = await fetchRate({ pair: 'btc_jpy' })

    expect.assertions(2)

    expect(Object.keys(result)).toEqual(['rate'])
    expect(result.rate).toEqual(expect.any(Number))
  })
})
