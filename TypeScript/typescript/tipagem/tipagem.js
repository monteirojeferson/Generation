var Default = /** @class */ (function () {
    function Default() {
        this.metodo();
        this.array = [{
                teste: "teste"
            }];
    }
    Default.prototype.metodo = function () {
        this.numero = 10;
        this.texto = "Testando um alerta simples em typescipt " + this.numero;
        return alert(this.texto);
    };
    return Default;
}());
