const fError = (status, enError, translatedErr) => {
  const error = new Error(enError);

  const validation = {
    status,
    message: enError,
    text: translatedErr
  }
  error.validation = validation;
  return error;
};

module.exports = fError;
