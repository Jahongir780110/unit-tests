const _ = require("./index.js");

test("Chunks [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] to size 3", () => {
  expect(_.chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)).toEqual([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10],
  ]);
});

test("Chunks [1, 2, 3] to size 5", () => {
  expect(_.chunk([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
});

test("Compacts array [0, 1, false, 2, '', 3]", () => {
  expect(_.compact([0, 1, false, 2, "", 3])).toEqual([1, 2, 3]);
});

test("Compacts array [0, 1, false, 2, '', 3, null, undefined]", () => {
  expect(_.compact([0, 1, false, 2, "", 3, null, undefined])).toEqual([
    1, 2, 3,
  ]);
});

test("Drops 1 element from the begging of the array [1, 2, 3]", () => {
  expect(_.drop([1, 2, 3])).toEqual([2, 3]);
});

test("Drops 5 elements from the begging of the array [1, 2, 3]", () => {
  expect(_.drop([1, 2, 3], 5)).toEqual([]);
});

test("function dropsWhile where array is equal to users and predicate is equal to function", () => {
  const users = [
    { user: "barney", active: false },
    { user: "fred", active: false },
    { user: "pebbles", active: true },
  ];

  const predicate = (o) => !o.active;

  expect(_.dropWhile(users, predicate)).toEqual([
    { user: "pebbles", active: true },
  ]);
});

test("function dropsWhile where array is equal to users and predicate is equal to object", () => {
  const users = [
    { user: "barney", active: false },
    { user: "fred", active: false },
    { user: "pebbles", active: true },
  ];

  const predicate = { user: "barney", active: false };

  expect(_.dropWhile(users, predicate)).toEqual([
    { user: "fred", active: false },
    { user: "pebbles", active: true },
  ]);
});

test("function dropsWhile where array is equal to users and predicate is equal to array", () => {
  const users = [
    { user: "barney", active: false },
    { user: "fred", active: false },
    { user: "pebbles", active: true },
  ];

  const predicate = ["active", false];

  expect(_.dropWhile(users, predicate)).toEqual([
    { user: "pebbles", active: true },
  ]);
});

test("function dropsWhile where array is equal to users and predicate is equal to string", () => {
  const users = [
    { user: "barney", active: false },
    { user: "fred", active: false },
    { user: "pebbles", active: true },
  ];

  const predicate = "active";

  expect(_.dropWhile(users, predicate)).toEqual([
    { user: "barney", active: false },
    { user: "fred", active: false },
    { user: "pebbles", active: true },
  ]);
});

test("Takes 1 element from the begging of the array [1, 2, 3]", () => {
  expect(_.take([1, 2, 3])).toEqual([1]);
});

test("Takes 5 elements from the begging of the array [1, 2, 3]", () => {
  expect(_.take([1, 2, 3], 5)).toEqual([1, 2, 3]);
});

test("function filteres where array is equal to users and predicate is equal to function", () => {
  const users = [
    { user: "barney", age: 36, active: true },
    { user: "fred", age: 40, active: false },
  ];

  const predicate = (o) => !o.active;

  expect(_.filter(users, predicate)).toEqual([
    { user: "fred", age: 40, active: false },
  ]);
});

test("function filteres where array is equal to users and predicate is equal to object", () => {
  const users = [
    { user: "barney", age: 36, active: true },
    { user: "fred", age: 40, active: false },
  ];

  const predicate = { age: 36, active: true };

  expect(_.filter(users, predicate)).toEqual([
    { user: "barney", age: 36, active: true },
  ]);
});

test("function filteres where array is equal to users and predicate is equal to array", () => {
  const users = [
    { user: "barney", age: 36, active: true },
    { user: "fred", age: 40, active: false },
  ];

  const predicate = ["active", false];

  expect(_.filter(users, predicate)).toEqual([
    { user: "fred", age: 40, active: false },
  ]);
});

test("function filteres where array is equal to users and predicate is equal to string", () => {
  const users = [
    { user: "barney", age: 36, active: true },
    { user: "fred", age: 40, active: false },
  ];

  const predicate = "active";

  expect(_.filter(users, predicate)).toEqual([
    { user: "barney", age: 36, active: true },
  ]);
});

test("function finds element where array is equal to users and predicate is equal to function", () => {
  const users = [
    { user: "barney", age: 36, active: true },
    { user: "fred", age: 40, active: false },
    { user: "pebbles", age: 1, active: true },
  ];

  const predicate = (o) => o.age < 40;

  expect(_.find(users, predicate)).toEqual({
    user: "barney",
    age: 36,
    active: true,
  });
});

test("function finds element where array is equal to users and predicate is equal to object", () => {
  const users = [
    { user: "barney", age: 36, active: true },
    { user: "fred", age: 40, active: false },
    { user: "pebbles", age: 1, active: true },
  ];

  const predicate = { age: 1, active: true };

  expect(_.find(users, predicate)).toEqual({
    user: "pebbles",
    age: 1,
    active: true,
  });
});

test("function finds element where array is equal to users and predicate is equal to array", () => {
  const users = [
    { user: "barney", age: 36, active: true },
    { user: "fred", age: 40, active: false },
    { user: "pebbles", age: 1, active: true },
  ];

  const predicate = ["active", false];

  expect(_.find(users, predicate)).toEqual({
    user: "fred",
    age: 40,
    active: false,
  });
});

test("function finds element where array is equal to users and predicate is equal to string", () => {
  const users = [
    { user: "barney", age: 36, active: true },
    { user: "fred", age: 40, active: false },
    { user: "pebbles", age: 1, active: true },
  ];

  const predicate = "active";

  expect(_.find(users, predicate)).toEqual({
    user: "barney",
    age: 36,
    active: true,
  });
});

test("array includes element", () => {
  expect(_.includes([1, 2, 3], 1)).toBe(true);
});

test("array includes element with starting position", () => {
  expect(_.includes([1, 2, 3], 1, 2)).not.toBe(true);
});

test("object includes element", () => {
  expect(_.includes({ a: 1, b: 2 }, 1)).toBe(true);
});

test("string includes element", () => {
  expect(_.includes("abcd", "bc")).toBe(true);
});

test("array map", () => {
  const iteratee = (n) => n * n;
  expect(_.map([4, 8], iteratee)).toEqual([16, 64]);
});

test("object map", () => {
  const iteratee = (n) => n * n;
  expect(_.map({ a: 4, b: 8 }, iteratee)).toEqual([16, 64]);
});

test("object map where iteratee is a string", () => {
  const users = [{ user: "barney" }, { user: "fred" }];
  const iteratee = "user";
  expect(_.map(users, iteratee)).toEqual(["barney", "fred"]);
});

test("zip arrays", () => {
  expect(_.zip(["a", "b"], [1, 2], [true, false])).toEqual([
    ["a", 1, true],
    ["b", 2, false],
  ]);
});

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
