import { BASE_URL } from "./constants.ts";
import { isString } from "../deps.ts";
import type { CoincheckSymbol } from "./types.ts";
import type {
  bat,
  bch,
  btc,
  enj,
  etc,
  eth,
  fct,
  iost,
  jpy,
  lsk,
  ltc,
  mona,
  omg,
  Pair,
  qtum,
  StrictExtract,
  xem,
  xlm,
  xrp,
} from "../deps.ts";
import { jsonFetch } from "./_utils.ts";
import type { Reviver } from "./_utils.ts";

export const API_RATE = "api/rate/";

export const ALL_RATE_PAIRS: RatePair[] = [
  "btc_jpy",
  "etc_jpy",
  "fct_jpy",
  "mona_jpy",
  "iost_jpy",
  "eth_jpy",
  "bat_jpy",
  "mona_btc",
  "bat_btc",
  "bch_btc",
  "bch_jpy",
  "ltc_btc",
  "plt_jpy",
  "lsk_btc",
  "iost_btc",
  "qtum_btc",
  "etc_btc",
  "eth_btc",
  "fct_btc",
  "lsk_jpy",
  "ltc_jpy",
  "qtum_jpy",
  "xem_btc",
  "xem_jpy",
  "xlm_btc",
  "xlm_jpy",
  "xrp_btc",
  "xrp_jpy",
  "enj_btc",
  "enj_jpy",
  "omg_btc",
  "omg_jpy",
];

export type RatePair =
  | Pair<CoincheckSymbol, jpy>
  | Pair<
    StrictExtract<
      CoincheckSymbol,
      | btc
      | eth
      | lsk
      | xrp
      | ltc
      | mona
      | xlm
      | bat
      | enj
      | etc
      | fct
      | xem
      | bch
      | qtum
      | iost
      | omg
    >,
    btc
  >;

export type RateResponse = {
  rate: number;
};

export type RateOptions = {
  pair: RatePair | (string & {});
};

const reviver: Reviver = (key, value) => {
  if (key === "rate" && isString(value)) {
    return Number(value);
  }
  return value;
};

/** */
export function fetchRate(
  { pair }: RateOptions,
  init?: RequestInit,
): Promise<RateResponse> {
  const url = new URL(pair, new URL(API_RATE, BASE_URL));

  return jsonFetch<RateResponse>(url, init, { parseJson: reviver });
}
