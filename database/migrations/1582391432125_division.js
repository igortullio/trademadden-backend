'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class DivisionSchema extends Schema {
  up() {
    this.create('divisions', (table) => {
      table.increments();
      table.string('name', 80).notNullable();
      table
        .integer('conference_id')
        .unsigned()
        .references('id')
        .inTable('conferences')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
  }

  down() {
    this.drop('divisions');
  }
}

module.exports = DivisionSchema;
