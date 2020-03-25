const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');

const connection = require('./database/connection');

const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id',IncidentController.delete);


// async (request, response) => {
    // const queries = request.query
    // const routes = request.params
    // const bodies = = request.body;
    // console.log(queries);
    // console.log("---");
    // console.log(routes)
module.exports = routes; 