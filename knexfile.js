const dotenv = require("dotenv");
dotenv.config();

const options = {
  client: process.env.DB_CLIENT,
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
  migrations: {
    tableName: "migrations",
    directory: __dirname + "/src/config/database/migrations",
  },
  seeds: {
    directory: __dirname + "/src/config/database/seeds",
  },
};

module.exports = options;
