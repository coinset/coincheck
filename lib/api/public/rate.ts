import fetch from 'node-fetch'

import { BASE_URL, API_RATE } from '../../constants/api'

import { join } from 'path'

import type { PublicAPI } from '@/shared/types'
import type { Join } from '@/utils/types'
import type { btc, jpy, etc, fct, mona, iost } from 'cryptocurrency-types'

const ALL_RATE_PAIRS: RatePair[] = [
  'btc_jpy',
  'etc_jpy',
  'fct_jpy',
  'iost_jpy',
  'mona_jpy'
]

type RatePair =
  | Join<btc, jpy>
  | Join<etc, jpy>
  | Join<fct, jpy>
  | Join<mona, jpy>
  | Join<iost, jpy>

type RateOptions = {
  pair: RatePair
}

type RateResponse = {
  rate: number
}

const reciever = (key: string, value: unknown) => {
  if (key === 'rate' && typeof value === 'string') {
    return parseFloat(value)
  }
  return value
}

const rate: PublicAPI<RateOptions, RateResponse> = async ({ pair }, init) => {
  const url = new URL(join(API_RATE, pair), BASE_URL)
  const res = await fetch(url.toString(), init)

  if (!res.ok) {
    throw Error(res.statusText)
  }

  const text = await res.text()

  return JSON.parse(text, reciever) as RateResponse
}

export { rate, ALL_RATE_PAIRS }
export type { RateOptions, RateResponse }
