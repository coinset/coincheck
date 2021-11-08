import type { CoincheckSymbol } from '@/shared/types/currency'

import type { jpy, btc, Pair } from 'cryptocurrency-types'

type TradePair = Pair<Extract<CoincheckSymbol, btc>, jpy>
type WSTradeData = {
  type: 'subscribe'
  channel: `${TradePair}-trades`
}

export type { TradePair, WSTradeData }
