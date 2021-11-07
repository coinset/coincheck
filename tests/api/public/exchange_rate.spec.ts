import { fetchExchangeRate } from '@/api/public/exchange_rate'

describe('fetchExchangeRate', () => {
  it('should return right interface', async () => {
    const { success, rate, price, amount } = await fetchExchangeRate({
      pair: 'btc_jpy',
      orderType: 'buy',
      amount: 1
    })

    console.log(
      await fetchExchangeRate({
        pair: 'btc_jpy',
        orderType: 'buy',
        amount: 1
      })
    )

    expect(success).toBeBoolean()
    expect(rate).toBeNumber()
    expect(price).toBeNumber()
    expect(amount).toBeNumber()
  })
})
