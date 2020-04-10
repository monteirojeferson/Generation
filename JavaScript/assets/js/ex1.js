var textoH1=document.getElementById("titulo");
alert(textoH1.textContent)
textoH1.className="vermelho"
textoH1.textContent="Texto aletarado pelo  JS-JavaScript"
//outra maneira de fazer é usando o indice []
// var textoH2=document.getElementById("h2")[0]
// alert(textoH2.textContent)
var textoH2=document.getElementById("subtitulo")
alert(textoH2.textContent)

var textoLi= document.getElementsByTagName("li")[3]
alert(textoLi.textContent)



var textoClasseVerde = document.getElementsByClassName("verde")
/*cria-se um array(vetor) , o array tem um tamanho, que é a propriedade lenght */
 for (var i = 0; i<textoClasseVerde.length ; i++) {
     
     alert(textoClasseVerde[i].textContent)
 }
 var textoLiVerde = document.querySelectorAll(".verde")
 for (var j = 0; j<textoLiVerde.length ; j++) {
     
    alert("Conteúdo pego querySelectorAll " + textoLiVerde[j].textContent)
 }