const compact = require("./compact");

describe("Compact tests", () => {
  test("Compacts array [0, 1, false, 2, '', 3]", () => {
    expect(compact([0, 1, false, 2, "", 3])).toEqual([1, 2, 3]);
  });

  test("Compacts array [0, 1, false, 2, '', 3, null, undefined]", () => {
    expect(compact([0, 1, false, 2, "", 3, null, undefined])).toEqual([
      1, 2, 3,
    ]);
  });
});
