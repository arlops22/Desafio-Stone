const express = require('express');

const PinsController = require('./controllers/PinsController');

const routes = express.Router();

routes.post('/pins', PinsController.create)
routes.get('/pins', PinsController.index)
routes.post('/pins/:pinId', PinsController.update)
routes.delete('/pins/:pinId', PinsController.delete)

module.exports = routes;