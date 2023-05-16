//Arquivo para testar a consumação dos dados no JSON
const fs = require("fs");

const dadosAtuais = JSON.parse(fs.readFileSync("livros.json"));
const novoDado = { id:'3', nome: 'Livro mais que demais' }

//Escrevendo dados no JSON
fs.writeFileSync("livros.json", JSON.stringify([...dadosAtuais, novoDado]))

//Lendo um arquivo no formato JSON
console.log(JSON.parse(fs.readFileSync("livros.json")))