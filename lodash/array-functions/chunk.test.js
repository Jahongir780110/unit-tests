const chunk = require("./chunk");

describe("Chunk tests", () => {
  test("Chunks [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] to size 3", () => {
    expect(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)).toEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [10],
    ]);
  });

  test("Chunks [1, 2, 3] to size 5", () => {
    expect(chunk([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
  });
});
