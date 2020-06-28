//inicio da definição da classe-------------------------------------------------
var Cumprimento = /** @class */ (function () {
    //método construtor
    function Cumprimento(_nome, _idade) {
        if (_nome === void 0) { _nome = ""; }
        if (_idade === void 0) { _idade = 0; }
        this.nome = _nome;
        this.idade = _idade;
    }
    //outro método
    Cumprimento.prototype.mostrarNomeIdade = function (nome, idade) {
        return "A pessoa " + nome + " tem " + idade + " anos";
    };
    return Cumprimento;
}());
//fim da definicção da classe--------------------------------------------------
//invocando a função e o resultado será armazenado na variavel de memória chamada resposta
var pessoa1 = new Cumprimento(); //serve para criar  objeto
console.log(pessoa1.mostrarNomeIdade("Jeferson", 21));
// utilizando um método do objeto resposta
