var funcoes = require("./funcoes")
var n1=5
var n2=5

// var soma = funcoes.soma()
//     console.log("Soma: "+soma)

// var sub = funcoes.sub()
//     console.log("Subtração: "+sub)

//     var div = funcoes.div()
//     console.log("Divisão: "+div)

// var mult = funcoes.mult()
//     console.log("Multiplicação: "+mult)

const express = require("express");//importando módulo express
const app= express();//criado uma instancai express
let port=3001

//rota principal
//send=função do express
//end= função do http
app.get('/',(req,res)=>{
    res.send("<h1 style='color:green'>Calculadora</h1>" + "soma "+funcoes.soma(n1,n2))
})
app.listen(port,()=>{
    console.log(`Servidor rodando em http://localhost: ${port}`)
    console.log("Para derrubar o servidor: ctrl + c")
})