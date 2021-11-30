import { BASE_URL } from "./constants.ts";
import { jsonFetch } from "./_utils.ts";
import type { Reviver } from "./_utils.ts";

export const API_ORDER_BOOKS = "api/order_books";

const reviver: Reviver = (key, value) => {
  if (["asks", "bids"].includes(key) && Array.isArray(value)) {
    return (value as [string, string][]).map(([price, amount]) => [
      Number(price),
      Number(amount),
    ]);
  }
  return value;
};

export type OrderBookOptions = {};

export type OrderBooksResponse = {
  /** [Price, Amount] */
  asks: [number, number][];

  /** [Price, Amount] */
  bids: [number, number][];
};

/** fetch public API of order books */
export function fetchOrderBooks(
  _?: OrderBookOptions,
  init?: RequestInit,
): Promise<OrderBooksResponse> {
  const url = new URL(API_ORDER_BOOKS, BASE_URL);

  return jsonFetch(url, init, { parseJson: reviver });
}
