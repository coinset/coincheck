import fetch from 'node-fetch'

import { ALL_EXCHANGE_RATE_PAIRS } from '@/api/public/exchange_rate'
import type { ExchangeRatePair } from '@/api/public/exchange_rate'
import { BASE_URL, API_TRADES } from '@/constants/api'
import { DateRegExp } from '@/utils/regex'

import type { PublicAPI, OrderType, Order } from '@/shared/types'

type TradesPair = ExchangeRatePair

const ALL_TRADES_PAIRS = ALL_EXCHANGE_RATE_PAIRS

const reciever = (key: string, value: unknown) => {
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
    starting_after: null
    ending_before: null
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

const trades: PublicAPI<TradesOptions, TradesResponse> = async (
  { pair },
  init
) => {
  const url = new URL(API_TRADES, BASE_URL)

  url.search = new URLSearchParams({
    pair
  }).toString()
  const res = await fetch(url.toString(), init)

  if (!res.ok) {
    throw Error(res.statusText)
  }

  const text = await res.text()

  return JSON.parse(text, reciever) as TradesResponse
}

export { trades, ALL_TRADES_PAIRS }
