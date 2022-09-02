/**
 * arquivo: app.js
 * descrição: arquivo responsavel por fazer a conexão com o arquivo 'server.js
 * data: 01/09/2022
 * autor: Alisson Santos de Jesus <@SChinado - Twitter>
 */

const express = require('express');
const cors = require('cors');

const app = express();

// ==> rotas da API (Employee):
const index = require('./routes/index');
const colaboradorRoute = require('./routes/colaborador.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({type: 'application/vnd.api+json'}));
app.use(cors());

app.use(index);
app.use('/api/', colaboradorRoute);

module.exports = app;