const response = require("../helpers/response");

const listUser = (req, res) => {
  let data = {
    data: 100,
  };

  res.status(200).json(response.format("List of users", data));
};

module.exports = {
  listUser,
};
