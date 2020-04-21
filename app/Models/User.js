'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');
const Hash = use('Hash');

class User extends Model {
  static boot() {
    super.boot();

    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password);
      }
    });
  }

  leagues() {
    return this.belongsToMany('App/Models/League')
      .pivotTable('users_leagues')
      .withTimestamps()
      .withPivot('is_admin');
  }

  tokens() {
    return this.hasMany('App/Models/Token');
  }
}

module.exports = User;
