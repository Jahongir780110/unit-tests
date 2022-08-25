module.exports = (object, predicate) => {
  const picked = {};

  for (const key in object) {
    if (predicate(object[key])) {
      picked[key] = object[key];
    }
  }

  return picked;
};
