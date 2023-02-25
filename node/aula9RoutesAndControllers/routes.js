const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const contatoController = require('./controllers/contatoController');
const sobreNosController = require('./controllers/sobreNosController');

// Rotas da home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost)

// Rotas de contato
route.get('/contato', contatoController.paginaInicial);

// Rotas de Sobre
route.get('/sobre', sobreNosController.paginaInicial);

module.exports = route;