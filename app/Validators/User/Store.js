'use strict';

const Antl = use('Antl');

class Store {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      username: 'required|max:20|unique:users,username',
      name: 'required|max:80',
      email: 'required|max:80|email|unique:users,email',
      password: 'required|confirmed',
      phone: 'required|unique:users,phone',
    };
  }

  get messages() {
    return Antl.list('validation');
  }
}

module.exports = Store;
