const dropWhile = require("./dropWhile");

describe("DropWhile tests", () => {
  test("function dropsWhile where array is equal to users and predicate is equal to function", () => {
    const users = [
      { user: "barney", active: false },
      { user: "fred", active: false },
      { user: "pebbles", active: true },
    ];

    const predicate = (o) => !o.active;

    expect(dropWhile(users, predicate)).toEqual([
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

    expect(dropWhile(users, predicate)).toEqual([
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

    expect(dropWhile(users, predicate)).toEqual([
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

    expect(dropWhile(users, predicate)).toEqual([
      { user: "barney", active: false },
      { user: "fred", active: false },
      { user: "pebbles", active: true },
    ]);
  });
});
