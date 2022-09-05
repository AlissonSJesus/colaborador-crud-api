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

// ==> Método responsável por listar todos os 'Colaboradores':
exports.listallColaboradores = async (req, res) => {
    const response = await db.query('SELECT * FROM employee ORDER BY nome ASC');
    res.status(200).send(response.rows);
}

// ==> Método responsável por listar um deteminado 'Colaborador' por Id:
//Obs: o pareInt não funciona para o tipo guid.
exports.findColaborador = async (req, res) => { 
    const idColaborador = req.params.id;
    const response = await db.query('SELECT * FROM employee WHERE id = $1', [idColaborador]);
    res.status(200).send(response.rows);
}