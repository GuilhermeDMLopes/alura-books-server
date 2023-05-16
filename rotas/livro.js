//Arquivo de rota de livros
//Importando ferramenta para criar rotas
const { Router } = require("express")
//IMportando controlador
const { getLivros, getLivro, postLivro, patchLivro, deleteLivro } = require("../controladores/livro.js")

//Criando roteador
const router = Router()

//criando rotas
router.get('/', getLivros)

router.get('/:id', getLivro)

router.post('/', postLivro)

router.patch('/:id', patchLivro)

router.delete('/:id', deleteLivro)

module.exports = router