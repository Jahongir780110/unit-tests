const push = require("../helper/push");

module.exports = (arr, n = 1) => {
  const dropped = [];

  for (let i = n; i < arr.length; i++) {
    push(dropped, arr[i]);
  }

  return dropped;
};
