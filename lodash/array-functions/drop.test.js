const drop = require("./drop");

describe("Drop tests", () => {
  test("Drops 1 element from the begging of the array [1, 2, 3]", () => {
    expect(drop([1, 2, 3])).toEqual([2, 3]);
  });

  test("Drops 5 elements from the begging of the array [1, 2, 3] where array length is equal to 3, the result should be empty array", () => {
    expect(drop([1, 2, 3], 5)).toEqual([]);
  });
});
