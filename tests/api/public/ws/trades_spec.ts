import { parseTrade } from '@/api/public/ws/trades'
import type { TradeData } from '@/api/public/ws/trades'

describe('parseTrade', () => {
  const table: [[string, TradeData]] = [
    ['[1, "btc_jpy", "100", "0.1", "buy"]', [1, 'btc_jpy', 100, 0.1, 'buy']]
  ]
  it.each(table)('parseTrade(%s) => %s', (data, expected) =>
    expect(parseTrade(data)).toEqual(expected)
  )
})
