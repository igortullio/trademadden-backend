'use strict';

const crypto = require('crypto');
const { subDays, isAfter } = require('date-fns');
const User = use('App/Models/User');
const Mail = use('Mail');

class ForgotPasswordController {
  async store({ request, response }) {
    try {
      const field = request.input('field');

      let user = await User.findBy('username', field);

      if (!user) {
        user = await User.findByOrFail('email', field);
      }

      user.token = crypto.randomBytes(10).toString('hex');
      user.token_created_at = new Date();

      await user.save();

      await Mail.send(
        ['emails.forgot_password', 'emails.forgot_password-text'],
        { email: user.email, token: user.token },
        (message) => {
          message
            .to(user.email)
            .from('no-replay@trademadden.com', 'Trade Madden')
            .subject('Recupereção de senha');
        }
      );
    } catch (err) {
      return response
        .status(err.status)
        .send({ error: { message: 'Erro ao resetar senha' } });
    }
  }

  async update({ request, response }) {
    try {
      const { token, password } = request.all();

      const user = await User.findByOrFail('token', token);

      const tokenExpired = isAfter(
        subDays(new Date(), 2),
        user.token_created_at
      );
      if (tokenExpired) {
        return response
          .status(401)
          .send({ error: { message: 'Token expirado' } });
      }

      user.token = null;
      user.token_created_at = null;
      user.password = password;

      await user.save();
    } catch (err) {
      return response
        .status(err.status)
        .send({ error: { message: 'Erro ao resetar senha' } });
    }
  }
}

module.exports = ForgotPasswordController;
