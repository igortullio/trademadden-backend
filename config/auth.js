'use strict';

const Env = use('Env');

module.exports = {
  authenticator: 'jwt',
  jwt: {
    algorithm: 'HS256',
    expiresIn: 10,
    serializer: 'lucid',
    model: 'App/Models/User',
    scheme: 'jwt',
    uid: 'username',
    password: 'password',
    options: {
      secret: Env.get('APP_KEY'),
    },
  },
};
