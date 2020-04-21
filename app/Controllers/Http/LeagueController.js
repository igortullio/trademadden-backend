'use strict';

const League = use('App/Models/League');
const UsersLeagues = use('App/Models/UsersLeagues');
const Team = use('App/Models/Team');
const Database = use('Database');

class LeagueController {
  async index({ auth }) {
    const leagues = await await Database.select([
      'leagues.id',
      'leagues.name',
      'leagues.description',
    ])
      .from('users_leagues')
      .innerJoin('leagues', 'users_leagues.league_id', 'leagues.id')
      .where({
        user_id: auth.user.id,
      });

    return leagues;
  }

  async store({ request, response, auth }) {
    const dataLeague = request.only(['name', 'description', 'password']);
    const dataUserLeague = request.only(['team_id']);

    const league = await League.create(dataLeague);

    const team = await Team.find(dataUserLeague.team_id);
    if (!team) {
      return response.status(404).send({
        error: { message: 'Time não encontrado' },
      });
    }

    const dataUsersLeague = {
      user_id: auth.user.id,
      league_id: league.id,
      team_id: team.id,
      is_admin: true,
    };
    await UsersLeagues.create(dataUsersLeague);

    return response.status(201).send({
      id: league.id,
      name: league.name,
      description: league.description,
    });
  }

  async update({ request, response, auth }) {
    const data = request.only(['name', 'description', 'password']);

    const league = await League.find(request.params.id);
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

    league.merge(data);
    await league.save();

    return response.status(200).send({
      id: league.id,
      name: league.name,
      description: league.description,
    });
  }

  async destroy({ params, response, auth }) {
    const league = await League.find(params.id);
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

    await league.delete();
    return response.status(204).send();
  }
}

module.exports = LeagueController;
