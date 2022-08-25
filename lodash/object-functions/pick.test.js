const pick = require("./pick");

describe("Pick tests", () => {
  test("picks a and c from { 'a': 1, 'b': '2', 'c': 3 }", () => {
    expect(pick({ a: 1, b: "2", c: 3 }, ["a", "c"])).toEqual({ a: 1, c: 3 });
  });
});
