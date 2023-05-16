//Arquivo de controle para livros
//Importando serviço
const { getTodosLivros, getLivroPorID, insereLivro, modificaLivro, deletaLivroPeloID } = require("../servicos/livro");

//Função get
function getLivros(req, res) {
    try { 
        const livros = getTodosLivros()       
        res.send(livros)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

//Função get por ID
function getLivro(req, res) {
    try {
        const id = req.params.id
        if(id && Number(id)) {
            const livros = getLivroPorID(id)       
            res.send(livros)
        } else {
            res.status(422).send("id invalido")
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

//Função post livro
function postLivro(req, res) {
    try {
        const novoLivro = req.body
        if(req.body.nome) {
            insereLivro(novoLivro)               
            res.status(201).send("Livro Inserido com Sucesso")
        } else {
            res.status(422).send("Campo nome é obrigatório")
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

//Função patch livro
function patchLivro(req, res) {
    try {
        const id = req.params.id
        if(id && Number(id)) {
            const body = req.body
            modificaLivro(body, id)               
            res.send("Livro modificado com Sucesso")
        } else {
            res.status(422).send("id invalido") 
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

//Função delete livro
function deleteLivro(req, res) {
    try {
        const id = req.params.id
        if(id && Number(id)) {
            deletaLivroPeloID(id)
            res.send("Livro deletado com Sucesso")
        } else {
            res.status(422).send("id invalido") 
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = { getLivros, getLivro, postLivro, patchLivro, deleteLivro };