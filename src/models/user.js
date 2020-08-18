const knex = require("../config/database");

module.exports = {
  async all() {
    try {
      const data = await knex("users").select();
      return {
        total: data.length,
        rows: data,
      };
    } catch (error) {
      console.error(error);
      throw "Error cant get all user";
    }
  },

  async find(where) {
    try {
      const data = await knex("users").select("*").where(where);
      return {
        total: data.length,
        rows: data,
      };
    } catch (error) {
      console.error(error);
      throw "Error find data";
    }
  },

  async insert(query) {
    try {
      const data = await knex("users")
        .insert(query)
        .returning(["email", "name"]);
      return {
        total: data.length,
        rows: data,
      };
    } catch (err) {
      console.error(err);
      throw "Error insert data";
    }
  },
};
