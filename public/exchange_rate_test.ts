import { expect, test } from "../dev_deps.ts";
import { fetchExchangeRate } from "./exchange_rate.ts";

test({
  name: "fetchExchangeRate",
  fn: async () => {
    const { success, rate, price, amount } = await fetchExchangeRate({
      pair: "btc_jpy",
      orderType: "buy",
      amount: 1,
    });

    expect(success).toBeBoolean();
    expect(rate).toBeNumber();
    expect(price).toBeNumber();
    expect(amount).toBeNumber();
  },
});
