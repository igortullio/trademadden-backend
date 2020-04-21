'use strict';

const Team = use('App/Models/Team');

class TeamSeeder {
  async run() {
    await Team.create({
      name: 'Buffalo Bills',
      abbreviation: 'BUF',
      division_id: 1,
    });
    await Team.create({
      name: 'Miami Dolphins',
      abbreviation: 'MIA',
      division_id: 1,
    });
    await Team.create({
      name: 'New England Patriots',
      abbreviation: 'NE',
      division_id: 1,
    });
    await Team.create({
      name: 'New York Jets',
      abbreviation: 'NYJ',
      division_id: 1,
    });

    await Team.create({
      name: 'Baltimore Ravens',
      abbreviation: 'BAL',
      division_id: 2,
    });
    await Team.create({
      name: 'Cincinnati Bengals',
      abbreviation: 'CIN',
      division_id: 2,
    });
    await Team.create({
      name: 'Cleveland Browns',
      abbreviation: 'CLE',
      division_id: 2,
    });
    await Team.create({
      name: 'Pittsburgh Steelers',
      abbreviation: 'PIT',
      division_id: 2,
    });

    await Team.create({
      name: 'Houston Texans',
      abbreviation: 'HOU',
      division_id: 3,
    });
    await Team.create({
      name: 'Indianapolis Colts',
      abbreviation: 'IND',
      division_id: 3,
    });
    await Team.create({
      name: 'Jacksonville Jaguars',
      abbreviation: 'JAX',
      division_id: 3,
    });
    await Team.create({
      name: 'Tennessee Titans',
      abbreviation: 'TEN',
      division_id: 3,
    });

    await Team.create({
      name: 'Denver Broncos',
      abbreviation: 'DEN',
      division_id: 4,
    });
    await Team.create({
      name: 'Kansas City Chiefs',
      abbreviation: 'KC',
      division_id: 4,
    });
    await Team.create({
      name: 'Las Vegas Raiders',
      abbreviation: 'LV',
      division_id: 4,
    });
    await Team.create({
      name: 'Los Angeles Chargers',
      abbreviation: 'LAC',
      division_id: 4,
    });

    await Team.create({
      name: 'Dallas Cowboys',
      abbreviation: 'DAL',
      division_id: 5,
    });
    await Team.create({
      name: 'New York Giants',
      abbreviation: 'NYG',
      division_id: 5,
    });
    await Team.create({
      name: 'Philadelphia Eagles',
      abbreviation: 'PHI',
      division_id: 5,
    });
    await Team.create({
      name: 'Washington Redskins',
      abbreviation: 'WAS',
      division_id: 5,
    });

    await Team.create({
      name: 'Chicago Bears',
      abbreviation: 'CHI',
      division_id: 6,
    });
    await Team.create({
      name: 'Detroit Lions',
      abbreviation: 'DET',
      division_id: 6,
    });
    await Team.create({
      name: 'Green Bay Packers',
      abbreviation: 'GB',
      division_id: 6,
    });
    await Team.create({
      name: 'Minnesota Vikings',
      abbreviation: 'MIN',
      division_id: 6,
    });

    await Team.create({
      name: 'Atlanta Falcons',
      abbreviation: 'ATL',
      division_id: 7,
    });
    await Team.create({
      name: 'Carolina Panthers',
      abbreviation: 'CAR',
      division_id: 7,
    });
    await Team.create({
      name: 'New Orleans Saints',
      abbreviation: 'NO',
      division_id: 7,
    });
    await Team.create({
      name: 'Tampa Bay Buccaneers',
      abbreviation: 'TB',
      division_id: 7,
    });

    await Team.create({
      name: 'Arizona Cardinals',
      abbreviation: 'ARI',
      division_id: 8,
    });
    await Team.create({
      name: 'Los Angeles Rams',
      abbreviation: 'LAR',
      division_id: 8,
    });
    await Team.create({
      name: 'San Francisco 49ers',
      abbreviation: 'SF',
      division_id: 8,
    });
    await Team.create({
      name: 'Seattle Seahawks',
      abbreviation: 'SEA',
      division_id: 8,
    });
  }
}

module.exports = TeamSeeder;
