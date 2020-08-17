exports.up = function (knex) {
  return knex.schema.createTable("users", function (t) {
    t.increments();
    t.string("email").notNullable().unique();
    t.string("name").notNullable();
    t.string("password").notNullable();
    t.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
