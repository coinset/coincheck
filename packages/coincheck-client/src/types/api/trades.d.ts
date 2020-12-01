import { BTC_JPY, ETC_JPY, FCT_JPY, MONA_JPY } from '@/types/pair'

type Pair = BTC_JPY | ETC_JPY | FCT_JPY | MONA_JPY

export type GetResponse = {
  success: boolean
  pagination: {
    limit: number
    order: 'desc'
    starting_after: null
    ending_before: null
  }
  data: {
    id: number
    amount: number
    rate: number
    pair: Pair
    order_type: 'sell'
    created_at: Date
  }[]
}

export type GetParameter = Pair
