const validatorLoop = (data, validations) => {
  for (item of validations) {
    const tmpData = data[item.parameter];
    for ([i, v] of Object.entries(item.validations)) {
      const validateErr = validateErrors(
        i,
        v,
        tmpData,
        item.parameter,
        item.faName
      );
      if (!!validateErr) return validateErr;
    }
  }

  return false;
};
