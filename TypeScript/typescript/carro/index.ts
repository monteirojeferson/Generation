class Carro{
    marca:string;
    ano:number;
    velMax:number;
    velAtual:number;


    constructor(_marca:string="",_ano:number=0,_velMax:number=100,_velAtual:number=0){
        this.marca=_marca;
        this.ano=_ano;
        this.velMax=_velMax;
        this.velAtual=_velAtual;

    
    }
  
    mostrarCarro(marca:string,ano:number){
        return `A marca é ${marca} e é de ${ano} `
    }

    acelerador(){
        while  (this.velAtual < this.velMax){
            this.velAtual ++;
          console.log(this.velAtual)  
    }
    
    }
    desacelerador(){
        
    }
}
let carro1= new Carro();
console.log(carro1.mostrarCarro("Gol",2005))
console.log(carro1.acelerador())