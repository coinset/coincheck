type TradeData = [Id, TradePair, Price, Amount, 'buy' | 'sell']
type Id = number
type Price = number
type Amount = number

import { Reviver } from '@/shared/types/fetch'

import type { TradePair } from '@/api/public/ws/types'

const reviver: Reviver = (key, value) => {
  if (['2', '3'].includes(key) && typeof value === 'string') {
    return Number(value)
  }

  return value
}

const parseTrade = (data: string): TradeData => {
  return JSON.parse(data, reviver) as TradeData
}

export { parseTrade, reviver }
export type { TradeData }
