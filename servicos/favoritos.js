//Arquivo responsavel por tratar os serviços de livro.js como conexão com JSON/DB
const fs = require("fs");

function getTodosFavoritos() {
    return JSON.parse(fs.readFileSync("favoritos.json"))
}

function getLivroPorID(id) {
    const livros = JSON.parse(fs.readFileSync("favoritos.json"))
    const livroFiltrado = livros.filter( livro => livro.id === id)[0]
   return livroFiltrado
}

function insereFavorito(id) {
    //Como livro ja existe na lista de livros, não criaremos um novo, apenas pegaremos ele.
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const favoritos = JSON.parse(fs.readFileSync("favoritos.json"))

    const livroInserido = livros.find(livro => livro.id === id)
    const novaListaDeLivrosFavoritos = [...favoritos, livroInserido]
    fs.writeFileSync("favoritos.json", JSON.stringify(novaListaDeLivrosFavoritos))
}

function modificaLivro(modificacoes, id) {
    //Livros serao modificados
    let livrosAtuais = JSON.parse(fs.readFileSync("favoritos.json"))
    //Pegando indice do livre a ser modificado
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)

    //livrosAtuais[indiceModificado] -> {id:"2", nome:"livro irado"}
    //modificacoes -> {nome:"nome mucho legal"}
    //Se nao tiver o campo, vai adiciona-lo. Se ja houver, vai alterar o valor dele
    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes }

    livrosAtuais[indiceModificado] = conteudoMudado

    fs.writeFileSync("favoritos.json", JSON.stringify(livrosAtuais))
    
}

function deletaFavoritoPeloID(id) {
    const livros = JSON.parse(fs.readFileSync("favoritos.json"))
    const livrosFiltrados = livros.filter( livro => livro.id !== id)
    fs.writeFileSync("favoritos.json", JSON.stringify(livrosFiltrados))
}

module.exports = { getTodosFavoritos, getLivroPorID, insereFavorito, modificaLivro, deletaFavoritoPeloID }