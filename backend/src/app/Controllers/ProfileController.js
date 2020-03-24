const Incident = require('../Models/Incident');

class ProfileController {
  async index(req, res) {
    const ong_id = req.ongId;

    const incidents = await Incident.findAll({
      where: { ong_id },
    });

    return res.json(incidents);
  }
}

module.exports = new ProfileController();
