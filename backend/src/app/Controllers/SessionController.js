const jwt = require('jsonwebtoken');
const Ong = require('../Models/Ong');
const authConfig = require('../../config/auth');

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const ong = await Ong.findOne({ where: { email } });

    if (!ong) {
      return res.status(400).json({ error: 'Ong does not exist ' });
    }

    if (!(await ong.checkPassword(password))) {
      return res.status(401).json({ error: 'Incorrect Password ' });
    }

    const { id, name } = ong;
    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expireIn,
      }),
    });
  }
}

module.exports = new SessionController();
