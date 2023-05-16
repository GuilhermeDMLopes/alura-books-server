//Arquivo principal do servidor
const express = require("express");
//IMportando rota de livro
const rotaLivro = require("./rotas/livro.js")

//Criando aplicação
const app = express();
//Recebendo Body do tipo JSON
app.use(express.json())

//Usando a rota
app.use('/livros', rotaLivro);

//Criando porta. 3000 é do Front
const port = 8000;

app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`)
})