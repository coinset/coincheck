import { callApi } from '@/base'
import { API_RATE } from '@/constants/api'
import { GetResponse, GetParameter } from '@/types/api/rate'
import { join } from 'path'

export const getRate = (pair: GetParameter): Promise<GetResponse> => {
  return callApi<GetResponse>(join(API_RATE, pair), {
    parseJson: (text) =>
      JSON.parse(text, (key, value) => {
        if (key === 'rate' && typeof value === 'string') {
          return parseFloat(value)
        }
        return value
      })
  })
}
