// function valida(){
//     //verificando se o nome digitado é maior ou igual a 3 caracteres  
//     var nome=document.getElementById("nome").value
//     if(nome.length<3){
//     document.getElementById("nome").style.background ="red";
//     } else{
//         document.getElementById("nome").style.background ="blue";
//     }
// }
document.getElementById('botao').addEventListener('click', function(e){
    //validando o nome
    var nome=document.getElementById("nome").value;
    if(nome.length<3){
        e.preventDefault();
            document.getElementById("nome").style.background ="red";
             } else{
                document.getElementById("nome").style.background ="white";
          }// fim da validação do nome

          //VALIDADNDO O EMAIL
var email=document.getElementById("email").value
          //FIM DA VALIDAÇÃO DO EMAIL
          //o campo email precisa conter "@","." e não pode estar vazio
if(email.indexOf("@")==-1 || email.indexOf(".")==-1 ||email.value==""){
e.preventDefault()
document.getElementById("email").style.borderColor="red";
}
else{
    document.getElementById("email").style.borderColor="green";
}
});