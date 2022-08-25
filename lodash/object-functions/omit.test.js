const omit = require("./omit");

describe("Omit tests", () => {
  test("omits a and c from { 'a': 1, 'b': '2', 'c': 3 }", () => {
    expect(omit({ a: 1, b: "2", c: 3 }, ["a", "c"])).toEqual({ b: "2" });
  });
});
