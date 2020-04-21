'use strict';

const Division = use('App/Models/Division');

class DivisionSeeder {
  async run() {
    await Division.create({
      name: 'East',
      conference_id: 1,
    });
    await Division.create({
      name: 'North',
      conference_id: 1,
    });
    await Division.create({
      name: 'South',
      conference_id: 1,
    });
    await Division.create({
      name: 'West',
      conference_id: 1,
    });

    await Division.create({
      name: 'East',
      conference_id: 2,
    });
    await Division.create({
      name: 'North',
      conference_id: 2,
    });
    await Division.create({
      name: 'South',
      conference_id: 2,
    });
    await Division.create({
      name: 'West',
      conference_id: 2,
    });
  }
}

module.exports = DivisionSeeder;
