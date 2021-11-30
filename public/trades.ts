// deno-lint-ignore-file camelcase
import { ALL_EXCHANGE_RATE_PAIRS } from "./exchange_rate.ts";
import { BASE_URL } from "./constants.ts";
import { jsonFetch } from "./_utils.ts";
import { isString } from "../deps.ts";
import type { Reviver } from "./_utils.ts";
import type { ExchangeRatePair } from "./exchange_rate.ts";

export type TradesPair = ExchangeRatePair;

export const ALL_TRADES_PAIRS = ALL_EXCHANGE_RATE_PAIRS;
export const API_TRADES = "api/trades";

const reviver: Reviver = (key, value) => {
  if (key === "created_at" && isString(value)) {
    return new Date(Date.parse(value));
  }

  if (["amount", "rate"].includes(key) && isString(value)) {
    return Number(value);
  }

  return value;
};

export type TradesOptions = {
  pair: TradesPair;
};

export type TradesResponse = {
  success: boolean;
  pagination: {
    limit: number;
    order: "asc" | "desc";
    starting_after: null | number;
    ending_before: null | number;
  };
  data: {
    id: number;
    amount: number;
    rate: number;
    pair: TradesPair;
    order_type: "sell" | "buy";
    created_at: Date;
  }[];
};

/** fetch public REST API for trades info */
export function fetchTrades(
  { pair }: TradesOptions,
  init?: RequestInit,
): Promise<TradesResponse> {
  const url = new URL(API_TRADES, BASE_URL);

  url.searchParams.set("pair", pair);

  return jsonFetch(url, init, { parseJson: reviver });
}
