var NomeCompleto = /** @class */ (function () {
    function NomeCompleto(_nome, _sobrenome) {
        if (_nome === void 0) { _nome = ""; }
        if (_sobrenome === void 0) { _sobrenome = ""; }
        this.nome = _nome;
        this.sobrenome = _sobrenome;
    }
    NomeCompleto.prototype.mostrarnome = function (nome, sobrenome) {
        return "O nome completo \u00E9 " + nome + " " + sobrenome;
    };
    return NomeCompleto;
}());
var jeff = new NomeCompleto();
console.log(jeff.mostrarnome("Jeferson", "Monteiro"));
alert(jeff.mostrarnome("Jeferson", "Monteiro"));
