const push = require("../helper/push");

module.exports = (arr, n = 1) => {
  const taken = [];

  for (let i = 0; i < n; i++) {
    if (arr[i] !== undefined) {
      push(taken, arr[i]);
    }
  }

  return taken;
};
