const find = require("./find");

describe("Find tests", () => {
  test("function finds element where array is equal to users and predicate is equal to function", () => {
    const users = [
      { user: "barney", age: 36, active: true },
      { user: "fred", age: 40, active: false },
      { user: "pebbles", age: 1, active: true },
    ];

    const predicate = (o) => o.age < 40;

    expect(find(users, predicate)).toEqual({
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

    expect(find(users, predicate)).toEqual({
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

    expect(find(users, predicate)).toEqual({
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

    expect(find(users, predicate)).toEqual({
      user: "barney",
      age: 36,
      active: true,
    });
  });
});
