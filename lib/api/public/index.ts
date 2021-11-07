export { fetchTicker, ALL_TICKER_PAIRS } from '@/api/public/ticker'
export type { TickerPair, TickerResponse } from '@/api/public/ticker'

export {
  fetchExchangeRate,
  ALL_EXCHANGE_RATE_PAIRS
} from '@/api/public/exchange_rate'
export type {
  ExchangeRateOptions,
  ExchangeRatePair,
  ExchangeRateResponse
} from '@/api/public/exchange_rate'

export { fetchTrades, ALL_TRADES_PAIRS } from '@/api/public/trades'
export type { TradesOptions, TradesResponse } from '@/api/public/trades'

export { fetchOrderBooks } from '@/api/public/order_books'
export type { OrderBooksResponse } from '@/api/public/order_books'

export { fetchRate, ALL_RATE_PAIRS } from '@/api/public/rate'
export type { RateOptions, RatePair, RateResponse } from '@/api/public/rate'
