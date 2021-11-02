import type { RequestInit } from 'node-fetch'

type PublicAPI<O, R> = (options: O, init?: RequestInit) => Promise<R>

type OrderType = 'sell' | 'buy'
type Order = 'asc' | 'desc'

export type { PublicAPI, OrderType, Order }
