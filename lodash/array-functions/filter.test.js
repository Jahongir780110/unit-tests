const filter = require("./filter");

describe("Filter tests", () => {
  test("function filters where array is equal to users and predicate is equal to function", () => {
    const users = [
      { user: "barney", age: 36, active: true },
      { user: "fred", age: 40, active: false },
    ];

    const predicate = (o) => !o.active;

    expect(filter(users, predicate)).toEqual([
      { user: "fred", age: 40, active: false },
    ]);
  });

  test("function filteres where array is equal to users and predicate is equal to object", () => {
    const users = [
      { user: "barney", age: 36, active: true },
      { user: "fred", age: 40, active: false },
    ];

    const predicate = { age: 36, active: true };

    expect(filter(users, predicate)).toEqual([
      { user: "barney", age: 36, active: true },
    ]);
  });

  test("function filteres where array is equal to users and predicate is equal to array", () => {
    const users = [
      { user: "barney", age: 36, active: true },
      { user: "fred", age: 40, active: false },
    ];

    const predicate = ["active", false];

    expect(filter(users, predicate)).toEqual([
      { user: "fred", age: 40, active: false },
    ]);
  });

  test("function filteres where array is equal to users and predicate is equal to string", () => {
    const users = [
      { user: "barney", age: 36, active: true },
      { user: "fred", age: 40, active: false },
    ];

    const predicate = "active";

    expect(filter(users, predicate)).toEqual([
      { user: "barney", age: 36, active: true },
    ]);
  });
});
