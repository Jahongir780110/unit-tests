const push = require("../helper/push");

module.exports = (collection, iteratee) => {
  const mapped = [];

  if (collection instanceof Array) {
    for (let i = 0; i < collection.length; i++) {
      if (typeof iteratee === "function") {
        push(mapped, iteratee(collection[i]));
      } else if (typeof iteratee === "string") {
        push(mapped, collection[i][iteratee]);
      }
    }
  } else if (typeof collection === "object") {
    for (const key in collection) {
      push(mapped, iteratee(collection[key]));
    }
  }

  return mapped;
};
