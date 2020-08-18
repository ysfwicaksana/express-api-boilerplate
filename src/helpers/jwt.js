const jwt = require("jsonwebtoken");
require("dotenv/config");

const generateToken = (payload) => {
  let token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    expiresIn: 7200,
  });

  return `Bearer ${token}`;
};

module.exports = {
  generateToken,
};
