const push = require("../helper/push");

module.exports = (object) => {
  const copiedObject = { ...object };
  const pairs = [];

  for (const key in copiedObject) {
    pairs.push([key, object[key]]);
  }

  return pairs;
};
