const take = require("./take");

describe("Take tests", () => {
  test("Takes 1 element from the begging of the array [1, 2, 3]", () => {
    expect(take([1, 2, 3])).toEqual([1]);
  });

  test("Takes 5 elements from the begging of the array [1, 2, 3]", () => {
    expect(take([1, 2, 3], 5)).toEqual([1, 2, 3]);
  });
});
