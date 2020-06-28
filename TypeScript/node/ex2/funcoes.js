const titulo = "Generation _ NodeJS"

function maiuscula(nome) {
    return nome.toUpperCase()

}

function minusculo(nome) {

    return nome.toLowerCase()
}
function totalLetras(nome) {
    var total = nome.length
    return "Total de letras " + total
}

/* PARA QUE ESSAS FUNÇÕES FIQUE ACESSÍVEIS PARA OUTRO 
CÓDIGO DEVEMOS EXPORTAR AS FUNÇÕS*/

module.exports = {
    maiuscula,minusculo,totalLetras,titulo
}