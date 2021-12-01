import { anyNumber, expect, objectContaining, test } from "../dev_deps.ts";
import { fetchRate } from "./rate.ts";

test({
  name: "fetchRate",
  fn: async () => {
    await expect(fetchRate({ pair: "btc_jpy" })).resolves.toEqual(
      objectContaining({
        rate: anyNumber(),
      }),
    );
  },
});
