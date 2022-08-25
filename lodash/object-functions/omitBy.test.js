const omitBy = require("./omitBy");

describe("Omit tests", () => {
  test("omitBy type number { 'a': 1, 'b': '2', 'c': 3 }", () => {
    expect(
      omitBy({ a: 1, b: "2", c: 3 }, (val) => {
        return typeof val === "number";
      })
    ).toEqual({ b: "2" });
  });
});
