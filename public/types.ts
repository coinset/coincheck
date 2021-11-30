import type {
  bat,
  bch,
  btc,
  enj,
  etc,
  eth,
  fct,
  iost,
  lsk,
  ltc,
  mona,
  omg,
  plt,
  qtum,
  xem,
  xlm,
  xrp,
} from "../deps.ts";

type CoincheckSymbol =
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
  | plt
  | qtum
  | iost
  | omg;

export type { CoincheckSymbol };
