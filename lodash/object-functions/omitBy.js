module.exports = (object, predicate) => {
  const omitted = {};

  for (const key in object) {
    if (!predicate(object[key])) {
      omitted[key] = object[key];
    }
  }

  return omitted;
};
