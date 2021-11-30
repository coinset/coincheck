import { expect, test } from "../dev_deps.ts";
import { fetchOrderBooks } from "./order_books.ts";

test({
  name: "fetchOrderBooks",
  fn: async () => {
    const { asks, bids } = await fetchOrderBooks();

    const expectPriceAmount = (value: [number, number][]) => {
      expect(value).toBeArray();

      value.forEach((priceAmount) => {
        expect(priceAmount).toBeArray();
        expect(priceAmount).toHaveLength(2);
        expect(priceAmount[0]).toBeNumber();
        expect(priceAmount[1]).toBeNumber();
      });
    };

    expectPriceAmount(asks);
    expectPriceAmount(bids);
  },
});
