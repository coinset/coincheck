export { fetchTicker, ALL_TICKER_PAIRS } from '@/api/public/rest/ticker'
export type { TickerPair, TickerResponse } from '@/api/public/rest/ticker'

export {
  fetchExchangeRate,
  ALL_EXCHANGE_RATE_PAIRS
} from '@/api/public/rest/exchange_rate'
export type {
  ExchangeRateOptions,
  ExchangeRatePair,
  ExchangeRateResponse
} from '@/api/public/rest/exchange_rate'

export { fetchTrades, ALL_TRADES_PAIRS } from '@/api/public/rest/trades'
export type { TradesOptions, TradesResponse } from '@/api/public/rest/trades'

export { fetchOrderBooks } from '@/api/public/rest/order_books'
export type { OrderBooksResponse } from '@/api/public/rest/order_books'

export { fetchRate, ALL_RATE_PAIRS } from '@/api/public/rest/rate'
export type {
  RateOptions,
  RatePair,
  RateResponse
} from '@/api/public/rest/rate'
