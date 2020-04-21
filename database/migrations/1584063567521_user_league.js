'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UserLeagueSchema extends Schema {
  up() {
    this.create('users_leagues', (table) => {
      table.increments();
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table
        .integer('league_id')
        .unsigned()
        .references('id')
        .inTable('leagues')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table
        .integer('team_id')
        .unsigned()
        .references('id')
        .inTable('teams')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.boolean('is_admin').defaultTo(false).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('users_leagues');
  }
}

module.exports = UserLeagueSchema;
