'use strict';

const Schema = use('Schema');

class UserSchema extends Schema {
  up() {
    this.create('users', (table) => {
      table.increments();
      table.string('username', 20).notNullable().unique();
      table.string('name', 80).notNullable();
      table.string('email', 80).notNullable().unique();
      table.string('password', 60).notNullable();
      table.string('phone', 14).notNullable().unique();
      table.string('token');
      table.timestamp('token_created_at');
      table.timestamps();
    });
  }

  down() {
    this.drop('users');
  }
}

module.exports = UserSchema;
