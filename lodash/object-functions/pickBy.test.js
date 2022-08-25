const pickBy = require("./pickBy");

describe("PickBy tests", () => {
  test("pickBy type number { 'a': 1, 'b': '2', 'c': 3 }", () => {
    expect(
      pickBy({ a: 1, b: "2", c: 3 }, (val) => {
        return typeof val === "number";
      })
    ).toEqual({ a: 1, c: 3 });
  });
});
