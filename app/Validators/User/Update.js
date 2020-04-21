'use strict';

const Antl = use('Antl');

class Update {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      username: 'max:20|unique:users,username',
      name: 'max:80',
      email: 'max:80|email|unique:users,email',
      password: 'confirmed',
      phone: 'unique:users,phone',
    };
  }

  get messages() {
    return Antl.list('validation');
  }
}

module.exports = Update;
