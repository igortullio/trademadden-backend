'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class UsersLeagues extends Model {
  user() {
    return this.hasOne('App/Models/User');
  }

  team() {
    return this.hasOne('App/Models/Team');
  }

  league() {
    return this.hasOne('App/Models/League');
  }
}

module.exports = UsersLeagues;
