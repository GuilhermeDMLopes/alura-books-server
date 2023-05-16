//Arquivo responsavel por tratar os serviços de livro.js como conexão com JSON/DB
const fs = require("fs");

function getTodosLivros() {
    return JSON.parse(fs.readFileSync("livros.json"))
}

module.exports = { getTodosLivros }