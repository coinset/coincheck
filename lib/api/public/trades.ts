import { ALL_EXCHANGE_RATE_PAIRS } from '@/api/public/exchange_rate'
import type { ExchangeRatePair } from '@/api/public/exchange_rate'
import { BASE_URL, API_TRADES } from '@/constants/api'
import { jsonFetch } from '@/shared/fetch'
import { DateRegExp } from '@/utils/regex'

import { Reviver } from '@/shared/types'
import type { PublicAPI, OrderType, Order } from '@/shared/types'

type TradesPair = ExchangeRatePair

const ALL_TRADES_PAIRS = ALL_EXCHANGE_RATE_PAIRS

const reviver: Reviver = (key, value) => {
  if (
    key === 'created_at' &&
    typeof value === 'string' &&
    value.match(DateRegExp)
  ) {
    return new Date(Date.parse(value))
  } else if (
    (key === 'amount' && typeof value === 'string') ||
    (key === 'rate' && typeof value === 'string')
  ) {
    return parseFloat(value)
  }

  return value
}

type TradesOptions = {
  pair: TradesPair
}

type TradesResponse = {
  success: boolean
  pagination: {
    limit: number
    order: Order
    starting_after: null | number
    ending_before: null | number
  }
  data: {
    id: number
    amount: number
    rate: number
    pair: TradesPair
    order_type: OrderType
    created_at: Date
  }[]
}

const fetchTrades: PublicAPI<TradesOptions, TradesResponse> = async (
  { pair },
  init
) => {
  const url = new URL(API_TRADES, BASE_URL)

  url.search = new URLSearchParams({
    pair
  }).toString()

  return jsonFetch(url, init, { parseJson: reviver })
}

export { fetchTrades, ALL_TRADES_PAIRS }
export type { TradesOptions, TradesResponse }
