/**
 * arquivo: database.js
 * descrição: arquivo responsavel pelas 'connectionStrings' (PostgreSQL)
 * data: 01/09/2022
 * autor: Alisson Santos de Jesus <@SChinado - Twitter>
 */

const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// ==> Conexão com a Base de Dados:
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

// ==> Conferindo se a conexão está ativa ou não:
pool.on('error', (err, client) => {
    console.log('Unexpected error on idle client', err);
    process.exit(-1);
})

pool.on('connect', () => {
    console.log('Base de Dados conectado com sucesso!');
});

module.exports = {
    query: (text, params) => pool.query(text, params)
}