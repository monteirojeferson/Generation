//inicio da definição da classe-------------------------------------------------
class Cumprimento{
    //atributos.... nome do atributo: tipo
    nome:string;
    idade:number;

    //método construtor
    constructor(_nome:string="",_idade:number=0){
        this.nome=_nome;
        this.idade=_idade;
    }
//outro método
    mostrarNomeIdade(nome:string,idade:number){
        return `A pessoa ${nome} tem ${idade} anos`
    }
}
//fim da definicção da classe--------------------------------------------------


//invocando a função e o resultado será armazenado na variavel de memória chamada resposta

let pessoa1 = new Cumprimento()//serve para criar  objeto
console.log(pessoa1.mostrarNomeIdade("Jeferson",21))
// utilizando um método do objeto resposta