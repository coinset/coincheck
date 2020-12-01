import { callApi } from '@/base'
import { API_ORDER_BOOKS } from '@/constants/api'
import { GetResponse } from '@/types/api/order-books'

export const getOderBooks = (): Promise<GetResponse> => {
  return callApi<GetResponse>(API_ORDER_BOOKS, {
    parseJson: (text) => {
      return JSON.parse(text, reciever)
    }
  })
}

export const reciever = (key: string, value: [string, string][]) => {
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
