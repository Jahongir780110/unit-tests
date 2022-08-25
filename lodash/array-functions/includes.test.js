const includes = require("./includes");

describe("Includes tests", () => {
  test("array includes element", () => {
    expect(includes([1, 2, 3], 1)).toBe(true);
  });

  test("array includes element with starting position", () => {
    expect(includes([1, 2, 3], 1, 2)).not.toBe(true);
  });

  test("object includes element", () => {
    expect(includes({ a: 1, b: 2 }, 1)).toBe(true);
  });

  test("string includes element", () => {
    expect(includes("abcd", "bc")).toBe(true);
  });
});
