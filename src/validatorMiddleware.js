const validatorF = require("./validatorFunction");

const validator = (validations) => {
  return (req, res, next) => {
    const validateRes = validatorF(item, validations);
    if (validateRes === false) return next();
    else return validateRes;
  };
};

module.exports = validator;
