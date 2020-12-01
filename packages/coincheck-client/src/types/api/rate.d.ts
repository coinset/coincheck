import {
  BTC_JPY,
  ETC_JPY,
  FCT_JPY,
  MONA_JPY,
  IOST_JPY,
  Pairs
} from '@/types/pair'

type Pair = BTC_JPY | ETC_JPY | FCT_JPY | MONA_JPY | IOST_JPY

export type GetResponse = {
  rate: number
}

export type GetParameter = Pairs
