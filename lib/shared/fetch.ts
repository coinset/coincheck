import fetch from 'cross-fetch'

import type { Reviver } from '@/shared/types/fetch'

const jsonFetch = async <T>(
  url: RequestInfo | URL,
  init?: RequestInit,
  options?: { parseJson: Reviver }
): Promise<T> => {
  const _url = url instanceof URL ? url.toString() : url
  const res = await fetch(_url, init)

  if (!res.ok) {
    throw Error(res.statusText)
  }

  const text = await res.text()

  return JSON.parse(text, options?.parseJson)
}

export { jsonFetch }
