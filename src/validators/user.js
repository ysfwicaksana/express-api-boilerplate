const { check } = require("express-validator");

const loginValidation = () => {
  return (validation = [
    check("email", "Email harus diisi dan sesuai format email")
      .isEmail()
      .normalizeEmail()
      .not()
      .isEmpty(),
    check("password", "Password harus diisi").not().isEmpty(),
  ]);
};

const registerValidation = () => {
  return (validation = [
    check("email", "Email harus diisi dan sesuai format email")
      .isEmail()
      .normalizeEmail()
      .not()
      .isEmpty(),
    check("password", "Password harus diisi").not().isEmpty(),
    check("name", "Nama harus diisi").not().isEmpty(),
  ]);
};

module.exports = {
  loginValidation,
  registerValidation,
};
