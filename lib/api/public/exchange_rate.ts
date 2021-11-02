import fetch from 'node-fetch'

import { API_EXCHANGE_ORDERS_RATE, BASE_URL } from '@/constants/api'

import type { Join } from '@/utils/types'
import type { btc, jpy, etc, fct, mona, plt } from 'cryptocurrency-types'

type ExchangeRatePair =
  | Join<btc, jpy>
  | Join<etc, jpy>
  | Join<fct, jpy>
  | Join<mona, jpy>
  | Join<plt, jpy>

type OrderType = 'sell' | 'buy'

type ApiExchangeRateResponse = {
  success: boolean
  rate: number
  price: number
  amount: number
}

const exchangeRate = async (
  pair: ExchangeRatePair,
  orderType: OrderType
): Promise<ApiExchangeRateResponse> => {
  const url = new URL(API_EXCHANGE_ORDERS_RATE, BASE_URL)

  url.search = new URLSearchParams({
    pair,
    order_type: orderType
  }).toString()
  const response = await fetch(url.toString())

  if (!response.ok) {
    throw Error(response.statusText)
  }
  return (await response.json()) as ApiExchangeRateResponse
}

export { exchangeRate }
