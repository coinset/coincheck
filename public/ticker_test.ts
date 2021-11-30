import { expect, test } from "../dev_deps.ts";
import { ALL_TICKER_PAIRS, API_TICKER, fetchTicker } from "./ticker.ts";

test({
  name: "fetchTicker",
  fn: async () => {
    const { last, bid, ask, high, low, volume, timestamp } = await fetchTicker({
      pair: "btc_jpy",
    });

    expect(last).toBeNumber();
    expect(bid).toBeNumber();
    expect(ask).toBeNumber();
    expect(high).toBeNumber();
    expect(low).toBeNumber();
    expect(volume).toBeNumber();
    expect(timestamp).toBeNumber();
  },
});

test("API_TICKER", () => {
  expect(ALL_TICKER_PAIRS).toIncludeSameMembers(["btc_jpy", "plt_jpy"]);
});

test("API_TICKER", () => {
  expect(API_TICKER).toBe("api/ticker");
});
