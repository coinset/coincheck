import { callApi } from '@/base'
import { API_EXCHANGE_ORDERS_RATE } from '@/constants/api'
import { GetResponse, GetParameters } from '@/types/api/exchange-orders-rate'

export const getRate = ({
  pair,
  orderType
}: GetParameters): Promise<GetResponse> => {
  return callApi<GetResponse>(API_EXCHANGE_ORDERS_RATE, {
    searchParams: { order_type: orderType, pair }
  })
}
