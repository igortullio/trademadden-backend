'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class TeamSchema extends Schema {
  up() {
    this.create('teams', (table) => {
      table.increments();
      table.string('name', 80).notNullable().unique();
      table.string('abbreviation', 3).notNullable();
      table
        .integer('division_id')
        .unsigned()
        .references('id')
        .inTable('divisions')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
  }

  down() {
    this.drop('teams');
  }
}

module.exports = TeamSchema;
