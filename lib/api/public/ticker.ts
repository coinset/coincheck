import { BASE_URL, API_TICKER } from '@/constants/api'
import { jsonFetch } from '@/shared/fetch'
import type { CoincheckSymbol } from '@/shared/types/currency'
import type { PublicAPI } from '@/shared/types/fetch'

import type { StrictExtract } from '@/utils/types'
import type { btc, jpy, plt, Pair } from 'cryptocurrency-types'

const ALL_TICKER_PAIRS: TickerPair[] = ['btc_jpy', 'plt_jpy']

type TickerPair = Pair<StrictExtract<CoincheckSymbol, btc | plt>, jpy>

type TickerOptions = {
  pair: TickerPair
}

type TickerResponse = {
  last: number
  bid: number
  ask: number
  high: number
  low: number
  volume: number
  timestamp: number
}

/**
 * @throws `TypeError`
 *
 * @throws `Error`
 *
 * @see https://coincheck.com/ja/documents/exchange/api#ticker
 * @beta
 */
const fetchTicker: PublicAPI<TickerOptions, TickerResponse> = async (
  { pair },
  init
) => {
  const url = new URL(API_TICKER, BASE_URL)

  url.searchParams.set('pair', pair)
  return jsonFetch(url, init)
}

export { fetchTicker, ALL_TICKER_PAIRS }
export type { TickerPair, TickerResponse }
