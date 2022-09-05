/**
 * arquivo: routes/colaborador-routes.js
 * descrição: arquivo responsavel pelas rotas da api
 * data: 01/09/2022
 * autor: Alisson Santos de Jesus <@SChinado - Twitter>
 */

 const router = require('express-promise-router')();
 const colaboradorController = require('../controllers/colaborador.controller');
 
 // ==> Definindo as rotas do CRUD - 'Colaborador'
 
 // ==> Rota responsável por criar um novo 'Colaborador(a):' (POST): localhost:3000/api/colaboradores

router.post('/colaboradores', colaboradorController.createColaborador);

// ==> Rota responsável por listar todos os colaboradores: (GET): localhost:3000/api/colaboradores

router.get('/colaboradores', colaboradorController.listallColaboradores);

 module.exports = router;
