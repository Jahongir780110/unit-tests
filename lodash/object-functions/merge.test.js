const merge = require("./merge");

describe("Merge tests", () => {
  test("merge objects", () => {
    expect(
      merge(
        {
          a: [{ b: 2 }, { d: 4 }],
        },
        {
          a: [{ c: 3 }, { e: 5 }],
        }
      )
    ).toEqual({
      a: [
        { b: 2, c: 3 },
        { d: 4, e: 5 },
      ],
    });
  });
});
