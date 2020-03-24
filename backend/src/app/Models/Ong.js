const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');

const { Model } = Sequelize;

class Ong extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        whats: Sequelize.STRING,
        city: Sequelize.STRING,
        uf: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async (ong) => {
      if (ong.password) {
        ong.password_hash = await bcrypt.hashSync(ong.password, 8);
      }
    });

    return this;
  }

  checkPassword(pass) {
    return bcrypt.compare(pass, this.password_hash);
  }
}

module.exports = Ong;
