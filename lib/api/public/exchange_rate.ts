import { API_EXCHANGE_ORDERS_RATE, BASE_URL } from '@/constants/api'
import { jsonFetch } from '@/shared/fetch'
import type { PublicAPI, Reviver } from '@/shared/types/fetch'

import type { StrictExtract } from '@/utils/types'
import type { all_pairs } from 'cryptocurrency-types'
import type { Exclusive } from 'utilitypes'

type ExchangeRatePair = StrictExtract<
  all_pairs,
  'btc_jpy' | 'etc_jpy' | 'fct_jpy' | 'mona_jpy' | 'plt_jpy'
>

type ExchangeRateOptions = {
  pair: ExchangeRatePair
  orderType: 'sell' | 'buy'
} & Exclusive<
  {
    amount: number
  },
  {
    price: number
  }
>

type ExchangeRateResponse = {
  success: boolean
  rate: number
  price: number
  amount: number
}

const ALL_EXCHANGE_RATE_PAIRS: ExchangeRatePair[] = [
  'btc_jpy',
  'etc_jpy',
  'fct_jpy',
  'mona_jpy',
  'plt_jpy'
]

const reviver: Reviver = (key, value) => {
  if (['rate', 'amount', 'price'].includes(key) && typeof value === 'string') {
    return Number(value)
  }

  return value
}

const fetchExchangeRate: PublicAPI<ExchangeRateOptions, ExchangeRateResponse> =
  async ({ pair, orderType, price, amount }, init) => {
    const url = new URL(API_EXCHANGE_ORDERS_RATE, BASE_URL)

    url.searchParams.set('pair', pair)
    url.searchParams.set('order_type', orderType)

    if (typeof price === 'number') {
      url.searchParams.set('price', String(price))
    }

    if (typeof amount === 'number') {
      url.searchParams.set('amount', String(amount))
    }

    return jsonFetch(url, init, {
      parseJson: reviver
    })
  }

export { fetchExchangeRate, ALL_EXCHANGE_RATE_PAIRS }
export type { ExchangeRateOptions, ExchangeRatePair, ExchangeRateResponse }
