const _ = require("./index.js");

describe("object tests", () => {
  test("merge objects", () => {
    expect(
      _.merge(
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

  test("omit { 'a': 1, 'b': '2', 'c': 3 }, ['a', 'c']", () => {
    expect(_.omit({ a: 1, b: "2", c: 3 }, ["a", "c"])).toEqual({ b: "2" });
  });

  test("omitBy { 'a': 1, 'b': '2', 'c': 3 }, isNumber", () => {
    expect(
      _.omitBy({ a: 1, b: "2", c: 3 }, (val) => {
        return typeof val === "number";
      })
    ).toEqual({ b: "2" });
  });

  test("pick { 'a': 1, 'b': '2', 'c': 3 }, ['a', 'c']", () => {
    expect(_.pick({ a: 1, b: "2", c: 3 }, ["a", "c"])).toEqual({ a: 1, c: 3 });
  });

  test("pickBy { 'a': 1, 'b': '2', 'c': 3 }, isNumber", () => {
    expect(
      _.pickBy({ a: 1, b: "2", c: 3 }, (val) => {
        return typeof val === "number";
      })
    ).toEqual({ a: 1, c: 3 });
  });

  test("toPairs object", () => {
    function Foo() {
      this.a = 1;
      this.b = 2;
    }
    Foo.prototype.c = 3;
    expect(_.toPairs(new Foo())).toEqual([
      ["a", 1],
      ["b", 2],
    ]);
  });
});
