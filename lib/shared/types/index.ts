import type { RequestInit } from 'node-fetch'

type PublicAPI<O, R> = (options: O, init?: RequestInit) => Promise<R>

type OrderType = 'sell' | 'buy'

export type { PublicAPI, OrderType }
