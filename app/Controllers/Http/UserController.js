'use strict';

const User = use('App/Models/User');

class UserController {
  async store({ request, response }) {
    const data = request.only([
      'username',
      'email',
      'name',
      'password',
      'phone',
    ]);

    const user = await User.create(data);

    return response.status(201).send({
      id: user.id,
      username: user.username,
      name: user.name,
      email: user.email,
      phone: user.phone,
    });
  }

  async update({ request, response, auth }) {
    const data = request.only([
      'username',
      'email',
      'name',
      'password',
      'phone',
    ]);

    const user = await User.find(auth.user.id);
    if (!user) {
      return response.status(404).send({
        error: { message: 'Usuário não encontrado' },
      });
    }

    user.merge(data);
    await user.save();

    return response.status(200).send({
      id: user.id,
      username: user.username,
      name: user.name,
      email: user.email,
      phone: user.phone,
    });
  }

  async destroy({ response, auth }) {
    const user = await User.find(auth.user.id);
    if (!user) {
      return response.status(404).send({
        error: { message: 'Usuário não encontrado' },
      });
    }

    await user.delete();
    return response.status(204).send();
  }
}

module.exports = UserController;
