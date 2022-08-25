const push = require("../helper/push");

function merge(object, ...sources) {
  const merged = {};
  let isArray = object instanceof Array;

  for (const key in object) {
    merged[key] = object[key];
  }

  for (const source of sources) {
    for (const key in source) {
      if (typeof source[key] === "object" && typeof merged[key] === "object") {
        merged[key] = merge(merged[key], source[key]);
      } else {
        merged[key] = source[key];
      }
    }
  }

  if (isArray) {
    const result = [];
    for (const key in merged) {
      push(result, merged[key]);
    }
    return result;
  }

  return merged;
}

module.exports = merge;
