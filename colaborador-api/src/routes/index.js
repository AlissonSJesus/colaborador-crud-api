/**
 * arquivo: routes/index.js
 * descrição: arquivo responsavel pela chamada da API na aplicação no lado do back-end
 * data: 01/09/2022
 * autor: Alisson Santos de Jesus <@SChinado - Twitter>
 */

const express = require('express');

const router = express.Router();

router.get('/api', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'Seja bem-vindo(a) a API Node.js + PostgreSQL + Azure',
        version: '1.0.0'
    })
})

module.exports = router;