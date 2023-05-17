//Arquivo principal do servidor
const express = require("express");
//IMportando rota de livro
const rotaLivro = require("./rotas/livro.js")
//Importando rota de favoritos
const rotaFavorito = require("./rotas/favorito.js")
//importando cors
const cors = require("cors");

//Criando aplicação
const app = express();
//Recebendo Body do tipo JSON
app.use(express.json())
//Usar cors para permitir que todas as origens possam fazer requisição.
app.use(cors({origin: "*"}))

//Usando a rota
app.use('/livros', rotaLivro);
app.use('/favoritos', rotaFavorito);

//Criando porta. 3000 é do Front
const port = 3300;

app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`)
})