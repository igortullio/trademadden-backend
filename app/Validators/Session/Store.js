'use strict';

const Antl = use('Antl');

class Store {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      username: 'required|max:20',
      password: 'required',
    };
  }

  get messages() {
    return Antl.list('validation');
  }
}

module.exports = Store;
