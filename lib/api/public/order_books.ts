import { BASE_URL, API_ORDER_BOOKS } from '@/constants/api'
import { jsonFetch } from '@/shared/fetch'

import { Reviver } from '@/shared/types'
import type { RequestInit } from 'node-fetch'

const reviver: Reviver = (key, value) => {
  if (
    key === 'asks' ||
    (key === 'bids' && Array.isArray(value) && !!value.length)
  ) {
    return (value as [string, string][]).map((v) => {
      const [vv, vvv] = v
      return [parseFloat(vv), parseFloat(vvv)]
    })
  }
  return value
}

type OrderBooksResponse = {
  asks: [number, number][]
  bids: [number, number][]
}

const orderBooks = async (init?: RequestInit): Promise<OrderBooksResponse> => {
  const url = new URL(API_ORDER_BOOKS, BASE_URL)

  return jsonFetch(url, init, { parseJson: reviver })
}

export { orderBooks }
export type { OrderBooksResponse }
