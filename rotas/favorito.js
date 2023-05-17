//Arquivo de rota de favoritos
//Importando ferramenta para criar rotas
const { Router } = require("express")
//IMportando controlador
const { getFavoritos, postFavorito, deleteFavorito } = require("../controladores/favorito.js")

//Criando roteador
const router = Router()

//criando rotas
router.get('/', getFavoritos)

router.post('/:id', postFavorito)

router.delete('/:id', deleteFavorito)

module.exports = router