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

// ==> Rota responsável por listar determinado colaborador, por Id: (GET): localhost:3000/api/colaboradores/:id
router.get('/colaboradores/:id', colaboradorController.findColaborador);

// ==> Rota responsável por atualizar um determinado colaborador por id: (PUT): localhost:3000/api/colaboradores/:id
router.put('/colaboradores/:id', colaboradorController.updateColaborador);

// ==> Rota responsável por deletar/excluir um determinado 'Colaborador', por Id: (DELETE): localhost:3000/api/colaboradores/:id
router.delete('/colaboradores/:id', colaboradorController.deleteColaborador);

module.exports = router;
