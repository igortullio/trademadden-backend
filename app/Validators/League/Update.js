'use strict';

const Antl = use('Antl');

class Update {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      name: 'max:40|unique:leagues,name',
      password: 'confirmed',
      description: 'max:80',
    };
  }

  get messages() {
    return Antl.list('validation');
  }
}

module.exports = Update;
