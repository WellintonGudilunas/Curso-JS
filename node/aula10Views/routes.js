const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');
const sobreNosController = require('./src/controllers/sobreNosController');

// Rotas da home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost)

// Rotas de contato
route.get('/contato', contatoController.paginaInicial);

// Rotas de Sobre
route.get('/sobre', sobreNosController.paginaInicial);

module.exports = route;