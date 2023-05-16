//Arquivo de rota de livros
//Importando ferramenta para criar rotas
const { Router } = require("express")
//IMportando controlador
const { getLivros } = require("../controladores/livro.js")

//Criando roteador
const router = Router()

//criando rotas
router.get('/', getLivros)

router.post('/', (req, res) => {
    res.send('Voce fez uma requisição POST')
})

router.patch('/', (req, res) => {
    res.send('Voce fez uma requisição PATCH')
})

router.delete('/', (req, res) => {
    res.send('Voce fez uma requisição DELETE')
})

module.exports = router