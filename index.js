const ValidateF = require("./src/ValidateF");
const validatorF = require("./src/validatorFunction");
const validatorM = require("./src/validatorMiddleware");

module.exports = {
  ValidateF,
  middleware: validatorM,
  function: validatorF,
};
