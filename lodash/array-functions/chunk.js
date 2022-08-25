const push = require("../helper/push");
const slice = require("../helper/slice");

module.exports = (arr, size = 1) => {
  const chunks = [];
  let i = 0;

  while (i < arr.length) {
    push(chunks, slice(arr, i, i + size));
    i += size;
  }

  return chunks;
};
