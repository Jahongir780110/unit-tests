function push(array, element) {
  array[array.length] = element;
}

function slice(target, start = 0, end = target.length) {
  const isString = typeof target === "string";
  let slicedTarget = isString ? "" : [];

  for (let i = start; i < end; i++) {
    if (target[i] !== undefined) {
      isString ? (slicedTarget += target[i]) : push(slicedTarget, target[i]);
    }
  }

  return slicedTarget;
}

const _ = {
  chunk: (arr, size = 1) => {
    const chunks = [];
    let i = 0;

    while (i < arr.length) {
      push(chunks, slice(arr, i, i + size));
      i += size;
    }

    return chunks;
  },

  compact: (arr) => {
    const compacted = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) {
        push(compacted, arr[i]);
      }
    }

    return compacted;
  },

  drop: (arr, n = 1) => {
    const dropped = [];

    for (let i = n; i < arr.length; i++) {
      push(dropped, arr[i]);
    }

    return dropped;
  },

  dropWhile: (arr, predicate) => {
    const dropped = [];
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
          if (!predicate(arr[i])) {
            push(dropped, arr[i]);
          }
        }
        break;
      case "array":
        for (let i = 0; i < arr.length; i++) {
          if (arr[i][predicate[0]] !== predicate[1]) {
            push(dropped, arr[i]);
          }
        }
        break;
      case "object":
        for (let i = 0; i < arr.length; i++) {
          let shouldDrop = true;
          for (const key in predicate) {
            if (arr[i][key] !== predicate[key]) {
              shouldDrop = false;
            }
          }
          if (!shouldDrop) {
            push(dropped, arr[i]);
          }
        }
        break;
      case "string":
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] !== predicate) {
            push(dropped, arr[i]);
          }
        }
        break;
    }

    return dropped;
  },

  take: (arr, n = 1) => {
    const taken = [];

    for (let i = 0; i < n; i++) {
      if (arr[i] !== undefined) {
        push(taken, arr[i]);
      }
    }

    return taken;
  },

  filter: (arr, predicate) => {
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
  },

  find: (arr, predicate) => {
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
  },

  includes: (collection, value, fromIndex = 0) => {
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
  },

  map: (collection, iteratee) => {
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
  },

  zip: (...arrays) => {
    const zipped = [];

    for (let i = 0; i < arrays[0].length; i++) {
      const row = [];
      for (let j = 0; j < arrays.length; j++) {
        push(row, arrays[j][i]);
      }
      push(zipped, row);
    }

    return zipped;
  },

  merge: (object, ...sources) => {
    const merged = {};
    let isArray = object instanceof Array;

    for (const key in object) {
      merged[key] = object[key];
    }

    for (const source of sources) {
      for (const key in source) {
        if (
          typeof source[key] === "object" &&
          typeof merged[key] === "object"
        ) {
          merged[key] = _.merge(merged[key], source[key]);
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
  },

  omit: (object, paths) => {
    const omitted = {};

    for (const key in object) {
      if (!_.includes(paths, key)) {
        omitted[key] = object[key];
      }
    }

    return omitted;
  },

  omitBy: (object, predicate) => {
    const omitted = {};

    for (const key in object) {
      if (!predicate(object[key])) {
        omitted[key] = object[key];
      }
    }

    return omitted;
  },

  pick: (object, paths) => {
    const picked = {};

    for (let i = 0; i < paths.length; i++) {
      if (paths[i] in object) {
        picked[paths[i]] = object[paths[i]];
      }
    }

    return picked;
  },

  pickBy: (object, predicate) => {
    const picked = {};

    for (const key in object) {
      if (predicate(object[key])) {
        picked[key] = object[key];
      }
    }

    return picked;
  },

  toPairs: (object) => {
    const copiedObject = { ...object };
    const pairs = [];

    for (const key in copiedObject) {
      pairs.push([key, object[key]]);
    }

    return pairs;
  },
};

module.exports = _;
