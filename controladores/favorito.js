//Arquivo de controlador de favorito.json
const { getTodosFavoritos, insereFavorito, deletaFavoritoPeloID } = require("../servicos/favoritos.js")

//Função get
function getFavoritos(req, res) {
    try { 
        const livros = getTodosFavoritos()      
        res.send(livros)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

//Função post favorito
function postFavorito(req, res) {
    try {
        const id = req.params.id
        insereFavorito(id)               
        res.status(201).send("Livro Inserido com Sucesso")       
    } catch (error) {
        res.status(500).send(error.message)
    }
}

//Função delete favorito
function deleteFavorito(req, res) {
    try {
        const id = req.params.id
        if(id && Number(id)) {
            deletaFavoritoPeloID(id)
            res.send("Favorito deletado com Sucesso")
        } else {
            res.status(422).send("id invalido") 
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
    getFavoritos,
    postFavorito,
    deleteFavorito
}