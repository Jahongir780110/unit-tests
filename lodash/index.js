const chunk = require("../lodash/array-functions/chunk");
const compact = require("../lodash/array-functions/compact");
const drop = require("../lodash/array-functions/drop");
const dropWhile = require("../lodash/array-functions/dropWhile");
const take = require("../lodash/array-functions/take");
const filter = require("../lodash/array-functions/filter");
const find = require("../lodash/array-functions/find");
const includes = require("../lodash/array-functions/includes");
const map = require("../lodash/array-functions/map");
const zip = require("../lodash/array-functions/zip");

const merge = require("../lodash/object-functions/merge");
const omit = require("../lodash/object-functions/omit");
const omitBy = require("../lodash/object-functions/omitBy");
const pick = require("../lodash/object-functions/pick");
const pickBy = require("../lodash/object-functions/pickBy");
const toPairs = require("../lodash/object-functions/toPairs");

const _ = {
  chunk,
  compact,
  drop,
  dropWhile,
  take,
  filter,
  find,
  includes,
  map,
  zip,
  merge,
  omit,
  omitBy,
  pick,
  pickBy,
  toPairs,
};

module.exports = _;
