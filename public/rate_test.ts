import { expect, test } from "../dev_deps.ts";
import { fetchRate } from "./rate.ts";

test({
  name: "fetchRate",
  fn: async () => {
    const { rate } = await fetchRate({ pair: "btc_jpy" });

    expect(rate).toBeNumber();
  },
});
