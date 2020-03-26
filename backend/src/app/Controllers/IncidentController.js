const Yup = require('yup');
const Incident = require('../Models/Incident');
const Ong = require('../Models/Ong');

class IncidentController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const incidents = await Incident.findAll({
      limit: 6,
      offset: (page - 1) * 6,
      include: [
        {
          model: Ong,
          as: 'ong',
          attributes: ['name', 'email', 'city', 'whats', 'uf'],
        },
      ],
    });

    const count = await Incident.count();
    res.header('X-Total-Count', count);

    return res.json(incidents);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      value: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validatios fail' });
    }

    const { title, description, value } = req.body;

    const ong_id = req.ongId;

    const incident = await Incident.create({
      title,
      description,
      value,
      ong_id,
    });

    return res.json(incident);
  }

  async update(req, res) {
    return res.json();
  }

  async delete(req, res) {
    const { id } = req.params;
    const ong_id = req.ongId;

    const incident = await Incident.findOne({
      where: {
        id,
        ong_id,
      },
    });

    if (!incident) {
      return res.status(400).json({ error: 'Does not exist incidents ' });
    }

    await incident.destroy({ where: { id: incident.id } });

    return res.status(204).send();
  }
}

module.exports = new IncidentController();
