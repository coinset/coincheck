export type GetResponse = {
  asks: Order[]
  bids: Order[]
}

type Rate = number
type Amount = number
type Order = [Rate, Amount]
