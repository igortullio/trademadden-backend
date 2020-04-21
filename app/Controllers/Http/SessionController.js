'use strict';

class SessionController {
  async token({ request, auth }) {
    const { username, password } = request.all();

    const token = await auth.withRefreshToken().attempt(username, password);

    console.log(token);
    return token;
  }

  async refreshToken({ request, auth }) {
    const refreshToken = request.input('refresh_token');

    const token = await auth
      .newRefreshToken()
      .generateForRefreshToken(refreshToken, true);

    return token;
  }
}

module.exports = SessionController;
