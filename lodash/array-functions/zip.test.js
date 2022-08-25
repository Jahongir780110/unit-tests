const zip = require("./zip");

describe("Zip tests", () => {
  test("zip arrays", () => {
    expect(zip(["a", "b"], [1, 2], [true, false])).toEqual([
      ["a", 1, true],
      ["b", 2, false],
    ]);
  });
});
