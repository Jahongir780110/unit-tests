const push = require("../helper/push");

module.exports = (...arrays) => {
  const zipped = [];

  for (let i = 0; i < arrays[0].length; i++) {
    const row = [];
    for (let j = 0; j < arrays.length; j++) {
      push(row, arrays[j][i]);
    }
    push(zipped, row);
  }

  return zipped;
};
