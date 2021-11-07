import { BASE_URL, API_RATE } from '@/constants/api'
import { jsonFetch } from '@/shared/fetch'
import type { Reviver, PublicAPI } from '@/shared/types/fetch'

import { join } from 'path'

import type { StrictExtract } from '@/utils/types'
import type { all_pairs } from 'cryptocurrency-types'

const ALL_RATE_PAIRS: RatePair[] = [
  'btc_jpy',
  'etc_jpy',
  'fct_jpy',
  'mona_jpy',
  'iost_jpy',
  'eth_jpy',
  'bat_jpy',
  'mona_btc',
  'bat_btc',
  'bch_btc',
  'bch_jpy',
  'ltc_btc',
  'plt_jpy',
  'lsk_btc',
  'iost_btc',
  'qtum_btc',
  'etc_btc',
  'eth_btc',
  'fct_btc',
  'lsk_jpy',
  'ltc_jpy',
  'qtum_jpy',
  'xem_btc',
  'xem_jpy',
  'xlm_btc',
  'xlm_jpy',
  'xrp_btc',
  'xrp_jpy',
  'enj_btc',
  'enj_jpy',
  'omg_btc',
  'omg_jpy'
]

type RatePair = StrictExtract<
  all_pairs,
  | 'btc_jpy'
  | 'etc_jpy'
  | 'fct_jpy'
  | 'mona_jpy'
  | 'iost_jpy'
  | 'eth_jpy'
  | 'bat_jpy'
  | 'mona_btc'
  | 'bat_btc'
  | 'bch_btc'
  | 'bch_jpy'
  | 'ltc_btc'
  | 'plt_jpy'
  | 'lsk_btc'
  | 'iost_btc'
  | 'qtum_btc'
  | 'etc_btc'
  | 'eth_btc'
  | 'fct_btc'
  | 'lsk_jpy'
  | 'ltc_jpy'
  | 'qtum_jpy'
  | 'xem_btc'
  | 'xem_jpy'
  | 'xlm_btc'
  | 'xlm_jpy'
  | 'xrp_btc'
  | 'xrp_jpy'
  | 'enj_btc'
  | 'enj_jpy'
  | 'omg_btc'
  | 'omg_jpy'
>

type RateOptions = {
  pair: RatePair
}

type RateResponse = {
  rate: number
}

const reviver: Reviver = (key, value) => {
  if (key === 'rate' && typeof value === 'string') {
    return parseFloat(value)
  }
  return value
}

const fetchRate: PublicAPI<RateOptions, RateResponse> = async (
  { pair },
  init
) => {
  const url = new URL(join(API_RATE, pair), BASE_URL)

  return jsonFetch<RateResponse>(url, init, { parseJson: reviver })
}

export { fetchRate, ALL_RATE_PAIRS }
export type { RatePair, RateOptions, RateResponse }
