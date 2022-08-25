const push = require("../helper/push");

module.exports = (arr, predicate) => {
  const filtered = [];
  const type =
    typeof predicate === "function"
      ? "function"
      : predicate instanceof Array
      ? "array"
      : typeof predicate === "object"
      ? "object"
      : typeof predicate === "string"
      ? "string"
      : null;

  switch (type) {
    case "function":
      for (let i = 0; i < arr.length; i++) {
        if (predicate(arr[i])) {
          push(filtered, arr[i]);
        }
      }
      break;
    case "array":
      for (let i = 0; i < arr.length; i++) {
        if (arr[i][predicate[0]] === predicate[1]) {
          push(filtered, arr[i]);
        }
      }
      break;
    case "object":
      for (let i = 0; i < arr.length; i++) {
        let shouldTake = true;
        for (const key in predicate) {
          if (arr[i][key] !== predicate[key]) {
            shouldTake = false;
          }
        }
        if (shouldTake) {
          push(filtered, arr[i]);
        }
      }
      break;
    case "string":
      for (let i = 0; i < arr.length; i++) {
        if (arr[i][predicate]) {
          push(filtered, arr[i]);
        }
      }
      break;
  }

  return filtered;
};
