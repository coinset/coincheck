import { getRate } from '@/rate'

describe('getRate', () => {
  it('should return right interface', async () => {
    const result = await getRate('btc_jpy')
    const { rate } = result

    expect.assertions(2)

    expect(Object.keys(result)).toEqual(['rate'])
    expect(typeof rate === 'number').toBeTruthy()
  })
})
