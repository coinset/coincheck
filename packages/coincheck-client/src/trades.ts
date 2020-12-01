import { callApi } from '@/base'
import { API_TRADES } from '@/constants/api'
import { GetResponse, GetParameter } from '@/types/api/trades'
import { DateRegExp } from '@/utils/regex'

export const getAPITrades = (pair: GetParameter): Promise<GetResponse> => {
  return callApi<GetResponse>(API_TRADES, {
    parseJson: (text) => {
      return JSON.parse(text, reciever)
    },
    searchParams: { pair }
  })
}

export const reciever = <T>(key: string, value: T) => {
  if (
    key === 'created_at' &&
    typeof value === 'string' &&
    value.match(DateRegExp)
  ) {
    return new Date(Date.parse(value))
  } else if (key === 'amount' && typeof value === 'string') {
    return parseFloat(value)
  }

  return value
}
