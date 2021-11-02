import { rate } from '@/api/public/rate'

describe('rate', () => {
  it('should return right interface', async () => {
    const result = await rate({ pair: 'btc_jpy' })

    expect.assertions(2)

    expect(Object.keys(result)).toEqual(['rate'])
    expect(result.rate).toEqual(expect.any(Number))
  })
})
