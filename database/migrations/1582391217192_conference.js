'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ConferenceSchema extends Schema {
  up() {
    this.create('conferences', (table) => {
      table.increments();
      table.string('name', 80).notNullable().unique();
      table.string('abbreviation', 3).notNullable();
    });
  }

  down() {
    this.drop('conferences');
  }
}

module.exports = ConferenceSchema;
