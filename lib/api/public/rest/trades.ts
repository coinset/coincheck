import { ALL_EXCHANGE_RATE_PAIRS } from '@/api/public/rest/exchange_rate'
import type { ExchangeRatePair } from '@/api/public/rest/exchange_rate'
import { BASE_URL, API_TRADES } from '@/constants/api'
import { jsonFetch } from '@/shared/fetch'
import type { Reviver, PublicAPI } from '@/shared/types/fetch'

type TradesPair = ExchangeRatePair

const ALL_TRADES_PAIRS = ALL_EXCHANGE_RATE_PAIRS

const reviver: Reviver = (key, value) => {
  if (key === 'created_at' && typeof value === 'string') {
    return new Date(Date.parse(value))
  }

  if (['amount', 'rate'].includes(key) && typeof value === 'string') {
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
    order: 'asc' | 'desc'
    starting_after: null | number
    ending_before: null | number
  }
  data: {
    id: number
    amount: number
    rate: number
    pair: TradesPair
    order_type: 'sell' | 'buy'
    created_at: Date
  }[]
}

const fetchTrades: PublicAPI<TradesOptions, TradesResponse> = async (
  { pair },
  init
) => {
  const url = new URL(API_TRADES, BASE_URL)

  url.searchParams.set('pair', pair)

  return jsonFetch(url, init, { parseJson: reviver })
}

export { fetchTrades, ALL_TRADES_PAIRS }
export type { TradesOptions, TradesResponse }
