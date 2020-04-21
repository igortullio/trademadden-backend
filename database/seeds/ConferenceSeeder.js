'use strict';

const Conference = use('App/Models/Conference');

class ConferenceSeeder {
  async run() {
    await Conference.create({
      name: 'American Football Conference',
      abbreviation: 'AFC',
    });

    await Conference.create({
      name: 'National Football Conference',
      abbreviation: 'NFC',
    });
  }
}

module.exports = ConferenceSeeder;
