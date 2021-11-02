import fetch from 'node-fetch'

import { BASE_URL, API_ORDER_BOOKS } from '@/constants/api'

import type { RequestInit } from 'node-fetch'

const reciever = (key: string, value: [string, string][]) => {
  if (
    key === 'asks' ||
    (key === 'bids' && Array.isArray(value) && !!value.length)
  ) {
    return value.map((v) => {
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

  const res = await fetch(url.toString(), init)

  if (!res.ok) {
    throw Error(res.statusText)
  }

  const text = await res.text()

  return JSON.parse(text, reciever)
}

export { orderBooks }
export type { OrderBooksResponse }
