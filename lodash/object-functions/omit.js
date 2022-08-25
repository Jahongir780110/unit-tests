const includes = require("../array-functions/includes");

module.exports = (object, paths) => {
  const omitted = {};

  for (const key in object) {
    if (!includes(paths, key)) {
      omitted[key] = object[key];
    }
  }

  return omitted;
};
