module.exports = (object, paths) => {
  const picked = {};

  for (let i = 0; i < paths.length; i++) {
    if (paths[i] in object) {
      picked[paths[i]] = object[paths[i]];
    }
  }

  return picked;
};
