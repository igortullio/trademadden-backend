'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');
const Hash = use('Hash');

class League extends Model {
  static boot() {
    super.boot();

    this.addHook('beforeSave', async (leagueInstance) => {
      if (leagueInstance.dirty.password) {
        leagueInstance.password = await Hash.make(leagueInstance.password);
      }
    });
  }

  users() {
    return this.belongsToMany('App/Models/User')
      .pivotTable('users_leagues')
      .withTimestamps()
      .withPivot('is_admin');
  }
}

module.exports = League;
