class Defaultt{
    // tipagens existentes
    texto:string;
    numero:number;
    qualquer:any; 
    boleano:boolean;
    array:Array<any>;
    

    constructor(){
        this.metodo();
        this.array=[{
            teste: "teste"
        }]
    }
    metodo(){
        this.numero=10;
        this.texto = `Testando um alerta simples em typescipt ${this.numero}`;
        return alert(this.texto);
    }
}