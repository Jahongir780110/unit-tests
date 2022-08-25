module.exports = (arr, predicate) => {
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
          return arr[i];
        }
      }
      break;
    case "array":
      for (let i = 0; i < arr.length; i++) {
        if (arr[i][predicate[0]] === predicate[1]) {
          return arr[i];
        }
      }
      break;
    case "object":
      for (let i = 0; i < arr.length; i++) {
        let shouldAdd = true;
        for (const key in predicate) {
          if (arr[i][key] !== predicate[key]) {
            shouldAdd = false;
          }
        }
        if (shouldAdd) {
          return arr[i];
        }
      }
      break;
    case "string":
      for (let i = 0; i < arr.length; i++) {
        if (arr[i][predicate]) {
          return arr[i];
        }
      }
      break;
  }

  return undefined;
};
