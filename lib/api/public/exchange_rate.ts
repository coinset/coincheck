import { API_EXCHANGE_ORDERS_RATE, BASE_URL } from '@/constants/api'
import { jsonFetch } from '@/shared/fetch'


import type { OrderType, PublicAPI } from '@/shared/types'
import type { Join } from '@/utils/types'
import type { btc, jpy, etc, fct, mona, plt } from 'cryptocurrency-types'

type ExchangeRatePair =
  | Join<btc, jpy>
  | Join<etc, jpy>
  | Join<fct, jpy>
  | Join<mona, jpy>
  | Join<plt, jpy>

type ExchangeRateOptions = {
  pair: ExchangeRatePair
  orderType: OrderType
}

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

const exchangeRate: PublicAPI<ExchangeRateOptions, ExchangeRateResponse> =
  async ({ pair, orderType }, init) => {
    const url = new URL(API_EXCHANGE_ORDERS_RATE, BASE_URL)

    url.search = new URLSearchParams({
      pair,
      order_type: orderType
    }).toString()

    return jsonFetch(url, init)
  }

export { exchangeRate, ALL_EXCHANGE_RATE_PAIRS }
export type { ExchangeRatePair, OrderType }
