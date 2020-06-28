function soma(n1, n2) {

    return n1 + n2



}
function sub(n1, n2) {

    return n1 - n2



}
function mult(n1, n2) {

    return n1 * n2



}
function div(n1, n2) {

    if(n2!=0){

        return n1 / n2

    } else{
        return "Impossível dividir por 0 "
    }

    



}
module.exports = { soma, sub, div, mult }