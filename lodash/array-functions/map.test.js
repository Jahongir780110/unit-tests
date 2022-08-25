const map = require("./map");

describe("Map tests", () => {
  test("array map", () => {
    const iteratee = (n) => n * n;
    expect(map([4, 8], iteratee)).toEqual([16, 64]);
  });

  test("object map", () => {
    const iteratee = (n) => n * n;
    expect(map({ a: 4, b: 8 }, iteratee)).toEqual([16, 64]);
  });

  test("object map where iteratee is a string", () => {
    const users = [{ user: "barney" }, { user: "fred" }];
    const iteratee = "user";
    expect(map(users, iteratee)).toEqual(["barney", "fred"]);
  });
});
