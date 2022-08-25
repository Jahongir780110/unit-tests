const push = require("../helper/push");

module.exports = (arr) => {
  const compacted = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      push(compacted, arr[i]);
    }
  }

  return compacted;
};
