'use strict';

const Antl = use('Antl');

class Store {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      name: 'required|max:40|unique:leagues,name',
      password: 'required|confirmed',
      description: 'max:80',
      team_id: 'required|number',
    };
  }

  get messages() {
    return Antl.list('validation');
  }
}

module.exports = Store;
