import { callApi } from '@/base'
import { API_TICKER } from '@/constants/api'
import { GetResponse } from '@/types/api/ticker'

export const getAPITicker = (): Promise<GetResponse> => {
  return callApi<GetResponse>(API_TICKER)
}
