class NomeCompleto{
    nome:string;
    sobrenome:string;

    constructor(_nome:string="",_sobrenome:string=""){
        this.nome=_nome;
        this.sobrenome=_sobrenome;


    }
    mostrarnome(nome:string ,sobrenome:string){
        return `O nome completo é ${nome} ${sobrenome}`

    }
}

let jeff = new NomeCompleto();
console.log(jeff.mostrarnome("Jeferson", "Monteiro"))
alert(jeff.mostrarnome("Jeferson", "Monteiro")) 