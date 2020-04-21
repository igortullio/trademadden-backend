'use strict';

const UsersLeagues = use('App/Models/UsersLeagues');
const User = use('App/Models/User');
const League = use('App/Models/League');
const Team = use('App/Models/Team');
const Database = use('Database');

class UserLeagueController {
  async store({ request, response, auth }) {
    const data = request.only(['user_id', 'league_id', 'team_id', 'is_admin']);

    const league = await League.find(data.league_id);
    if (!league) {
      return response.status(404).send({
        error: { message: 'Liga não encontrada' },
      });
    }

    await league.load('users', (builder) => {
      builder.where('is_admin', true);
    });
    const leagueAdmins = league.getRelated('users');

    if (!leagueAdmins.rows.find((admin) => admin.id === auth.user.id)) {
      return response.status(403).send({
        error: {
          message: 'Usuário autenticado não é administrador da liga',
        },
      });
    }

    const user = await User.find(data.user_id);
    if (!user) {
      return response.status(404).send({
        error: { message: 'Usuário não encontrado' },
      });
    }

    const team = await Team.find(data.team_id);
    if (!team) {
      return response.status(404).send({
        error: { message: 'Time não encontrado' },
      });
    }

    let userLeague = await Database.select('teams.name')
      .from('users_leagues')
      .where({
        league_id: data.league_id,
        user_id: data.user_id,
      })
      .innerJoin('teams', 'teams.id', 'users_leagues.team_id')
      .first();
    if (userLeague) {
      return response.status(400).send({
        error: {
          message: `Usuário já está cadastrado no time: ${userLeague.name}`,
        },
      });
    }

    userLeague = await Database.select('users.name')
      .from('users_leagues')
      .where({
        league_id: data.league_id,
        team_id: team.id,
      })
      .innerJoin('users', 'users.id', 'users_leagues.user_id')
      .first();
    if (userLeague) {
      return response.status(400).send({
        error: {
          message: `Já existe usuário cadastrado para esse time: ${userLeague.name}`,
        },
      });
    }

    userLeague = await UsersLeagues.create(data);
    return userLeague;
  }
}

module.exports = UserLeagueController;
