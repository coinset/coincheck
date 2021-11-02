jest.mock('node-fetch')

import fetch from 'node-fetch'

import { ticker } from '@/api/public/ticker'
import { BASE_URL, API_TICKER } from '@/constants/api'

const { Response } = jest.requireActual('node-fetch')

describe('ticker', () => {
  it('should request to /api/ticker', async () => {
    const _fetch = fetch as unknown as jest.Mock
    _fetch.mockReturnValue(Promise.resolve(new Response(JSON.stringify({}))))

    await ticker({ pair: 'btc_jpy' })

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith(
      `${BASE_URL}/${API_TICKER}?pair=btc_jpy`,
      undefined
    )
  })

  it('should throw error when network error has occurred', () => {
    const _fetch = fetch as unknown as jest.Mock
    _fetch.mockReturnValue(Promise.reject(Error()))

    expect(ticker({ pair: 'btc_jpy' })).rejects.toThrow()
  })

  it('should throw error when status is not 2xx', async () => {
    const _fetch = fetch as unknown as jest.Mock

    _fetch.mockReturnValue(
      Promise.resolve(new Response(JSON.stringify({}), { status: 404 }))
    )

    expect(ticker({ pair: 'btc_jpy' })).rejects.toThrowError(expect.any(Error))
  })
})
