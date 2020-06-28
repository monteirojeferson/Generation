var Carro = /** @class */ (function () {
    function Carro(_marca, _ano, _velMax, _velAtual) {
        if (_marca === void 0) { _marca = ""; }
        if (_ano === void 0) { _ano = 0; }
        if (_velMax === void 0) { _velMax = 100; }
        if (_velAtual === void 0) { _velAtual = 0; }
        this.marca = _marca;
        this.ano = _ano;
        this.velMax = _velMax;
        this.velAtual = _velAtual;
    }
    Carro.prototype.mostrarCarro = function (marca, ano) {
        return "A marca \u00E9 " + marca + " e \u00E9 de " + ano + " ";
    };
    Carro.prototype.acelerador = function () {
        while (this.velAtual < this.velMax) {
            this.velAtual++;
            console.log(this.velAtual);
        }
    };
    return Carro;
}());
var carro1 = new Carro();
console.log(carro1.mostrarCarro("Gol", 2005));
console.log(carro1.acelerador());
