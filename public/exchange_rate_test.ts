import { any, anyNumber, expect, test } from "../dev_deps.ts";
import { fetchExchangeRate } from "./exchange_rate.ts";

test({
  name: "fetchExchangeRate",
  fn: async () => {
    await expect(fetchExchangeRate({
      pair: "btc_jpy",
      orderType: "buy",
      amount: 1,
    })).resolves.toEqual({
      success: any(Boolean),
      rate: anyNumber(),
      amount: anyNumber(),
      price: anyNumber(),
    });
  },
});
