class Soma{
    numero1:number;
    numero2:number;
    resultado:number;

    constructor(_numero1:number=0,_numero2:number=0,_resultado:number=0){

        this.numero1=_numero1;
        this.numero2=_numero2;
        this.resultado =_resultado;
        this.resultado =this.numero1+ this.numero2;
        
    }
mostrarSoma(numero1:number,numero2:number,resultado:number){
  
    return `A soma de ${numero1} + ${numero2} fica ${resultado}`
}
}
let resultFinal = new Soma();
console.log(resultFinal.mostrarSoma(5,5))
