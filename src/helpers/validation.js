const { validationResult } = require("express-validator");

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = []; //variable kosong buat push error messages
  const pullParams = []; //variable kosong buat push params dan mengeceknya
  errors.array().forEach((err) => {
    if (!pullParams.includes(err.param)) {
      extractedErrors.push({
        [err.param]: err.msg,
      });
    }

    pullParams.push(err.param);
  });

  //bersihkan array pullParams dari isinya
  while (pullParams.length > 0) {
    pullParams.pop();
  }

  return res.status(400).json({
    errors: extractedErrors,
  });
};
module.exports = validate;
