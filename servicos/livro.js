//Arquivo responsavel por tratar os serviços de livro.js como conexão com JSON/DB
const fs = require("fs");

function getTodosLivros() {
    return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivroPorID(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const livroFiltrado = livros.filter( livro => livro.id === id)[0]
   return livroFiltrado
}

function insereLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const novaListaDeLivros = [...livros, livroNovo]
    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros))
}

function modificaLivro(modificacoes, id) {
    //Livros serao modificados
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    //Pegando indice do livre a ser modificado
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)

    //livrosAtuais[indiceModificado] -> {id:"2", nome:"livro irado"}
    //modificacoes -> {nome:"nome mucho legal"}
    //Se nao tiver o campo, vai adiciona-lo. Se ja houver, vai alterar o valor dele
    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes }

    livrosAtuais[indiceModificado] = conteudoMudado

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
    
}

function deletaLivroPeloID(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const livrosFiltrados = livros.filter( livro => livro.id !== id)
    fs.writeFileSync("livros.json", JSON.stringify(livrosFiltrados))
}

module.exports = { getTodosLivros, getLivroPorID, insereLivro, modificaLivro, deletaLivroPeloID }