const Sequelize = require('sequelize');

const Ong = require('../app/Models/Ong');
const Incident = require('../app/Models/Incident');

const databaseConfig = require('../config/database');

const models = [Ong, Incident];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

module.exports = new Database();
