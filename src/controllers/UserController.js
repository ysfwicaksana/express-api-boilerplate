const { startTime, jsonFormat } = require("../helpers/response");
const user = require("../models/user");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const { generateToken } = require("../helpers/jwt");
dotenv.config();

module.exports = {
  index(req, res) {
    res.status(200).json({
      data: "SIPT UBP API",
    });
  },

  async register(req, res) {
    const data = await user.find({ email: req.body.email });

    if (data.total > 0) {
      return res
        .status(400)
        .json(jsonFormat("Email tidak tersedia", null, startTime));
    }

    await user.insert({
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, bcrypt.genSaltSync(12)),
      name: req.body.name,
    });

    const userData = await user.find({ email: req.body.email });
    var pullUser = {};
    userData.rows.find.map((user) => {
      pullUser = user;
    });

    let payload = {
      id: pullUser.id,
      email: pullUser.email,
      name: pullUser.name,
    };

    let jsonData = {
      id: userData.id,
      email: userData.email,
      name: userData.name,
      token: generateToken(payload),
    };

    return res
      .status(200)
      .json(jsonFormat("login successfully", jsonData, startTime));
  },

  async login(req, res) {
    const data = await user.find({ email: req.body.email });

    if (data.total > 0) {
      var userData = {};
      data.rows.map((user) => {
        userData = user;
      });

      const matchPassword = await bcrypt.compare(
        req.body.password,
        userData.password
      );

      if (matchPassword) {
        let payload = {
          id: userData.id,
          email: userData.email,
          name: userData.name,
        };

        let jsonData = {
          id: userData.id,
          email: userData.email,
          name: userData.name,
          token: generateToken(payload),
        };

        return res
          .status(200)
          .json(jsonFormat("login successfully", jsonData, startTime));
      }

      res
        .status(400)
        .json(jsonFormat("Email atau password salah", null, startTime));
    }
  },
};
