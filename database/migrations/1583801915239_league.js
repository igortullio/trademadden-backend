'use strict';

const Schema = use('Schema');

class LeagueSchema extends Schema {
  up() {
    this.create('leagues', (table) => {
      table.increments();
      table.string('name', 40).notNullable();
      table.string('description', 80);
      table.string('password', 60).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('leagues');
  }
}

module.exports = LeagueSchema;
