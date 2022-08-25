const push = require("./push");

module.exports = function slice(target, start = 0, end = target.length) {
  const isString = typeof target === "string";
  let slicedTarget = isString ? "" : [];

  for (let i = start; i < end; i++) {
    if (target[i] !== undefined) {
      isString ? (slicedTarget += target[i]) : push(slicedTarget, target[i]);
    }
  }

  return slicedTarget;
};
