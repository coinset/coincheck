import { BASE_URL } from "./constants.ts";
import { jsonFetch } from "./_utils.ts";
import { isString } from "../deps.ts";
import type { CoincheckSymbol } from "./types.ts";
import type { Reviver } from "./_utils.ts";

import type {
  btc,
  etc,
  Exclusive,
  fct,
  jpy,
  mona,
  Pair,
  plt,
  StrictExtract,
} from "../deps.ts";

export const API_EXCHANGE_ORDERS_RATE = "api/exchange/orders/rate";

type ExchangeRatePair = Pair<
  StrictExtract<CoincheckSymbol, btc | etc | fct | mona | plt>,
  jpy
>;

type ExchangeRateOptions =
  & {
    pair: ExchangeRatePair;
    orderType: "sell" | "buy";
  }
  & Exclusive<
    {
      amount: number;
    },
    {
      price: number;
    }
  >;

type ExchangeRateResponse = {
  success: boolean;
  rate: number;
  price: number;
  amount: number;
};

const ALL_EXCHANGE_RATE_PAIRS: ExchangeRatePair[] = [
  "btc_jpy",
  "etc_jpy",
  "fct_jpy",
  "mona_jpy",
  "plt_jpy",
];

const reviver: Reviver = (key, value) => {
  if (["rate", "amount", "price"].includes(key) && isString(value)) {
    return Number(value);
  }

  return value;
};

function fetchExchangeRate(
  { pair, orderType, price, amount }: ExchangeRateOptions,
  init?: RequestInit,
): Promise<ExchangeRateResponse> {
  const url = new URL(API_EXCHANGE_ORDERS_RATE, BASE_URL);

  url.searchParams.set("pair", pair);
  url.searchParams.set("order_type", orderType);

  if (typeof price === "number") {
    url.searchParams.set("price", String(price));
  }

  if (typeof amount === "number") {
    url.searchParams.set("amount", String(amount));
  }

  return jsonFetch(url, init, {
    parseJson: reviver,
  });
}

export { ALL_EXCHANGE_RATE_PAIRS, fetchExchangeRate };
export type { ExchangeRateOptions, ExchangeRatePair, ExchangeRateResponse };
