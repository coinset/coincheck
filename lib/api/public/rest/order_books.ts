import { BASE_URL, API_ORDER_BOOKS } from '@/constants/api'
import { jsonFetch } from '@/shared/fetch'
import { Reviver, SimplePublicAPI } from '@/shared/types/fetch'

const reviver: Reviver = (key, value) => {
  if (key === 'asks' || (key === 'bids' && Array.isArray(value))) {
    return (value as [string, string][]).map(([price, amount]) => [
      parseFloat(price),
      parseFloat(amount)
    ])
  }
  return value
}

// eslint-disable-next-line @typescript-eslint/ban-types
type OrderBookOptions = {}

type Price = number
type Amount = number

type OrderBooksResponse = {
  asks: [Price, Amount][]
  bids: [Price, Amount][]
}

const fetchOrderBooks: SimplePublicAPI<OrderBookOptions, OrderBooksResponse> =
  async (init?: RequestInit) => {
    const url = new URL(API_ORDER_BOOKS, BASE_URL)

    return jsonFetch(url, init, { parseJson: reviver })
  }

export { fetchOrderBooks }
export type { OrderBooksResponse }
