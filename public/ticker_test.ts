import { anyNumber, expect, objectContaining, test } from "../dev_deps.ts";
import { ALL_TICKER_PAIRS, API_TICKER, fetchTicker } from "./ticker.ts";

test({
  name: "fetchTicker",
  fn: async () => {
    await expect(fetchTicker({
      pair: "btc_jpy",
    })).resolves.toEqual(objectContaining({
      last: anyNumber(),
      bid: anyNumber(),
      ask: anyNumber(),
      high: anyNumber(),
      low: anyNumber(),
      volume: anyNumber(),
      timestamp: anyNumber(),
    }));
  },
});

test("API_TICKER", () => {
  expect(ALL_TICKER_PAIRS).toIncludeSameMembers(["btc_jpy", "plt_jpy"]);
});

test("API_TICKER", () => {
  expect(API_TICKER).toBe("api/ticker");
});
