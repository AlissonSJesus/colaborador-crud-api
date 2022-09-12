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
    // const response = await db.query('SELECT * FROM employee ORDER BY nome ASC');
    const response = await db.query("SELECT id, nome, cargo, salary, matricula, to_char(data_nascimento, 'dd/MM/yyyy') as data_nascimento FROM employee ORDER BY nome asc");
    res.status(200).send(response.rows);
}

// ==> Método responsável por listar um deteminado 'Colaborador' por Id:
//Obs: o pareInt não funciona para o tipo guid.
exports.findColaborador = async (req, res) => {
    const idColaborador = req.params.id;
    const response = await db.query("SELECT id, nome, cargo, salary, matricula, to_char(data_nascimento, 'yyyy-MM-dd') as data_nascimento FROM employee WHERE id = $1", [idColaborador]);
    // const response = await db.query('SELECT * FROM employee WHERE id = $1', [idColaborador]);
    res.status(200).send(response.rows[0]);
}

// ==> Método responsável por atualizar um determinado 'Colaborador(a)', por Id:
exports.updateColaborador = async (req, res) => {
    const idColaborador = req.params.id;
    const { nome, cargo, salary, data_nascimento, matricula } = req.body;
    const response = await db.query(
        'UPDATE employee SET nome = $1, cargo = $2, salary = $3, data_nascimento = $4, matricula = $5 WHERE id = $6', [nome, cargo, salary, data_nascimento, matricula, idColaborador]
    );
    res.status(200).send({ message: 'Colaborador atualizado com sucesso!' });
}

// ==> Método responsável por deletar um determinado 'Colaborador' po Id:
exports.deleteColaborador = async (req, res) => {
    const idColaborador = req.params.id;
    await db.query('DELETE FROM employee WHERE id = $1', [idColaborador]);

    res.status(200).send({ message: 'Colaborador deletado com sucesso!' });
}