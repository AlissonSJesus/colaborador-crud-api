/**
 * arquivo: server.js
 * descrição: arquivo responsável por toda a configuração e execução do back-end
 * data: 01/09/2022
 * autor: Alisson Santos de Jesus <@SChinado - Twitter>
 */

const app = require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Aplicação sendo executada na porta...: ', port);
});