import { jsonFetch } from "./_utils.ts";
import { BASE_URL } from "./constants.ts";

import type { CoincheckSymbol } from "./types.ts";
import type { btc, jpy, Pair, plt, StrictExtract } from "../deps.ts";

export const API_TICKER = "api/ticker";

export const ALL_TICKER_PAIRS: TickerPair[] = ["btc_jpy", "plt_jpy"];

export type TickerPair = Pair<StrictExtract<CoincheckSymbol, btc | plt>, jpy>;

export type TickerOptions = {
  pair: TickerPair;
};

export type TickerResponse = {
  last: number;
  bid: number;
  ask: number;
  high: number;
  low: number;
  volume: number;
  timestamp: number;
};

/** fetch public REST API for ticker
 * @throws `TypeError`
 *
 * @throws `Error`
 *
 * @see https://coincheck.com/ja/documents/exchange/api#ticker
 * @beta
 */
export function fetchTicker(
  { pair }: TickerOptions,
  init?: RequestInit,
): Promise<TickerResponse> {
  const url = new URL(API_TICKER, BASE_URL);

  url.searchParams.set("pair", pair);
  return jsonFetch(url, init);
}
