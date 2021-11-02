import fetch from 'node-fetch'

import { BASE_URL, API_TICKER } from '@/constants/api'

import type { PublicAPI } from '@/shared/types'
import type { Join } from '@/utils/types'
import type { btc, jpy, plt } from 'cryptocurrency-types'

const ALL_TICKER_PAIRS: TickerPair[] = ['btc_jpy', 'plt_jpy']

type TickerPair = Join<btc, jpy> | Join<plt, jpy>

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
const ticker: PublicAPI<TickerOptions, TickerResponse> = async (
  { pair },
  init
) => {
  const searchParams = new URLSearchParams({
    pair
  })

  const url = new URL(API_TICKER, BASE_URL)
  url.search = searchParams.toString()
  const response = await fetch(url.toString(), init)
  if (!response.ok) {
    throw Error(response.statusText)
  }

  return (await response.json()) as TickerResponse
}

export { ticker, ALL_TICKER_PAIRS }
export type { TickerPair, TickerResponse }
