// console.log("Olá Mundo");

//criar a identidade do projeto : npm init
//observar que fo criado o arquivo package.json(javascript obejct notatio) que contem informações do projeto
/*instalar o framework de node chamado: express
para isso execute o comando: npm i express*/

let express = require('express')// importando o modulo expres
let app = express()
let port = 8081

// Rota
app.get('/', (req, res) => {
    res.send('<h1>Home</h1>')})
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
  console.log('Para derrubar o servidor: ctrl + c');
})