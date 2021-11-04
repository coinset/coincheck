jest.mock('node-fetch')

import fetch from 'node-fetch'

import { fetchTicker } from '@/api/public/ticker'

const { Response } = jest.requireActual('node-fetch')

describe('ticker', () => {
  it('should request to /api/ticker', async () => {
    const _fetch = fetch as unknown as jest.Mock
    _fetch.mockReturnValue(Promise.resolve(new Response(JSON.stringify({}))))

    await fetchTicker({ pair: 'btc_jpy' })

    expect(fetch).toHaveBeenCalledTimes(1)
  })

  it('should throw error when network error has occurred', () => {
    const _fetch = fetch as unknown as jest.Mock
    _fetch.mockReturnValue(Promise.reject(Error()))

    expect(fetchTicker({ pair: 'btc_jpy' })).rejects.toThrow()
  })

  it('should throw error when status is not 2xx', async () => {
    const _fetch = fetch as unknown as jest.Mock

    _fetch.mockReturnValue(
      Promise.resolve(new Response(JSON.stringify({}), { status: 404 }))
    )

    expect(fetchTicker({ pair: 'btc_jpy' })).rejects.toThrowError(
      expect.any(Error)
    )
  })
})
