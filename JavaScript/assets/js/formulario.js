function mostrar(event){
    event.preventDefault();

    var nome = document.getElementById ("nome").value;
    
    var idade = document.getElementById ("idade").value;
    var nascimento = document.getElementById ("nascimento").value;
    // Formatando a data para o calendario brasileiro
    var  dia=nascimento.substring(8,10)
    var  mes=nascimento.substring(5,7)
    var  ano=nascimento.substring(0,4)
        nascimento= dia +"/" + mes + "/" + ano
    var observacao = document.getElementById ("observacao").value;
    var estados = document.getElementById("estados").value
    var senha = document.getElementById("senha").value
    var sexo=document.querySelector("input[name='sexo']:checked").value

    var almoco=document.getElementById("almoco").checked
    if(almoco==true){
        almoco="sim"
    } else{
        almoco="não"
    }
    var valeTrans = document.getElementById("valetransporte").checked
    if(valeTrans==true){
        valeTrans="Sim , eu quero"

    } else{
        valeTrans="Não, não quero"
    }


    alert("Nome: " + nome + "\n" +"Idade: "+ idade +"\n" + "Nascimento: " + nascimento + "\n" + observacao + "\n" + estados + "\n" +"Senha: " + senha + "\n"  + "Sexo: " + sexo + "\n" + "almoço " + almoco +"\n" +"Vale transporte " + valeTrans);
    
    document.getElementById("conteudo").innerHTML=`Nome ${nome}<br> idade ${idade}<br> Nascimento ${nascimento}<br> obesvação ${observacao} `;
}