import { BTC_JPY, ETC_JPY, FCT_JPY, MONA_JPY } from '../pair'

export type GetResponse = {
  success: boolean
  rate: number
  price: number
  amount: number
}

export type GetParameters = {
  orderType: 'sell' | 'buy'
  pair: BTC_JPY | ETC_JPY | FCT_JPY | MONA_JPY
}
