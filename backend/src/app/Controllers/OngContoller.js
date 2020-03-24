const Yup = require('yup');
const Ong = require('../Models/Ong');

class OngController {
  async index(req, res) {
    const ongs = await Ong.findAll();

    return res.json(ongs);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
      whats: Yup.string().required(),
      city: Yup.string().required(),
      uf: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails ' });
    }

    const { email } = req.body;

    const ongExists = await Ong.findOne({
      where: {
        email,
      },
    });

    if (ongExists) {
      return res.status(400).json({ error: 'Ong already exists' });
    }

    const { id, name } = await Ong.create(req.body);

    return res.json({
      id,
      name,
      email,
    });
  }
}

module.exports = new OngController();
