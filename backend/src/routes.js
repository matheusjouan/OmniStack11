const express = require('express');
const authMiddleware = require('./app/Middleware/auth');

const OngController = require('./app/Controllers/OngContoller');
const SessionController = require('./app/Controllers/SessionController');
const IncidentController = require('./app/Controllers/IncidentController');
const ProfileController = require('./app/Controllers/ProfileController');

const routes = express.Router();

// ONGS
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.store);

// SESSION
routes.post('/session', SessionController.store);

routes.get('/incidents', IncidentController.index);
// AUTENTICATION
routes.use(authMiddleware);
routes.post('/incidents', IncidentController.store);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;
