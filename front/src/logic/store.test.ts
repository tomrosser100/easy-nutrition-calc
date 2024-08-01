import { testList } from "../testConstants";
import { Store } from "./store";

jest.mock("nanoid", () => {
  return { nanoid: () => "123" };
});

describe("store", () => {
  describe("update", () => {
    it("given populated list, updates user report", () => {
      const store = new Store();
      const list = testList;
      store.list = list;
      store.update();
      const expectation = {
        advice: {
          grams: 78,
          operator: "at most",
        },
        orderedContributors: [
          { grams: 126.5, name: "testName3" },
          { grams: 10, name: "testName2" },
          { grams: 5, name: "testName1" },
        ],
        total: 141.5,
      };

      expect(store.userReport.fat).toStrictEqual(expectation);
    });
  });
});
