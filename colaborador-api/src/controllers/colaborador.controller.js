/**
 * arquivo: controllers/colaborador.routes.js
 * descrição: arquivo responsavel pela lógica do crud (API - Colaborador)
 * data: 01/09/2022
 * autor: Alisson Santos de Jesus <@SChinado - Twitter>
 */

const db = require('../config/database');

// ==> Método responsável por criar um novo 'Colaborador':
exports.createColaborador = async (req, res) => {
    const { nome, cargo, salary, data_nascimento, matricula } = req.body;
    const { rows } = await db.query(
        "INSERT INTO employee (nome, cargo, salary, data_nascimento, matricula) VALUES ($1, $2, $3, $4, $5)", [nome, cargo, salary, data_nascimento, matricula]
    );

    res.status(201).send({
        message: 'Colaborador cadastrado com sucesso!',
        body: {
            colaborador: { nome, cargo, salary, data_nascimento, matricula }
        }
    });
}