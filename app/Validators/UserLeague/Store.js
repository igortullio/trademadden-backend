'use strict';

const Antl = use('Antl');

class Store {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      user_id: 'required|number',
      league_id: 'required|number',
      team_id: 'required|number',
      is_admin: 'boolean',
    };
  }

  get messages() {
    return Antl.list('validation');
  }
}

module.exports = Store;
