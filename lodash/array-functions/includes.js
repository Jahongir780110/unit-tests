const slice = require("../helper/slice");

module.exports = (collection, value, fromIndex = 0) => {
  const type =
    collection instanceof Array
      ? "array"
      : typeof collection === "object"
      ? "object"
      : typeof collection === "string"
      ? "string"
      : null;

  switch (type) {
    case "array":
      fromIndex = fromIndex >= 0 ? fromIndex : collection.length + fromIndex;
      for (let i = fromIndex; i < collection.length; i++) {
        if (collection[i] === value) {
          return true;
        }
      }
      break;
    case "object":
      for (const key in collection) {
        if (collection[key] === value) {
          return true;
        }
      }
      break;
    case "string":
      fromIndex = fromIndex >= 0 ? fromIndex : collection.length + fromIndex;
      for (let i = fromIndex; i < collection.length; i++) {
        if (slice(collection, i, i + value.length) === value) {
          return true;
        }
      }
      break;
  }

  return false;
};
