(function() {

    interface OperacaoMatematica {
        numero1: number
        numero2: number
        getResultado() : number
    }

    class Soma implements OperacaoMatematica {
        numero1: number;        
        numero2: number;
        
        constructor(numero1: number, numero2: number) {
            this.numero1 = numero1;
            this.numero2 = numero2;
        }
        
        getResultado(): number {
            return this.numero1 + this.numero2;
        }
    }

    let n1 = 1;
    let n2 = 2;

    let soma = new Soma(n1, n2);
    console.log(soma.getResultado());

    let potencia = {
        numero1: 5,
        numero2: 2,
        getResultado() {
            return Math.pow(this.numero1, this.numero2);
        }
    };

    console.log(potencia.getResultado());
    
    soma = potencia;

    console.log(soma.getResultado());
        
})();