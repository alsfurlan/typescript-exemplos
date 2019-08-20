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

    class Subtracao implements OperacaoMatematica {
        numero1: number;        
        numero2: number;

        constructor(numero1: number, numero2: number) {
            this.numero1 = numero1;
            this.numero2 = numero2;
        }

        getResultado(): number {
            return this.numero1 - this.numero2;
        }
    }

    class Multiplicacao implements OperacaoMatematica {
        numero1: number;        
        numero2: number;

        constructor(numero1: number, numero2: number) {
            this.numero1 = numero1;
            this.numero2 = numero2;
        }

        getResultado(): number {
            return this.numero1 * this.numero2;
        }
    }

    class Divisao implements OperacaoMatematica {
        numero1: number;        
        numero2: number;

        constructor(numero1: number, numero2: number) {
            this.numero1 = numero1;
            this.numero2 = numero2;
        }

        getResultado(): number {
            return this.numero1 / this.numero2;
        }
    }

    let n1 = 1;
    let n2 = 2;

    let soma = new Soma(n1, n2);
    console.log(soma.getResultado());

    let subtracao = new Subtracao(n1, n2);
    console.log(subtracao.getResultado());

    console.log(new Multiplicacao(n1, n2).getResultado());
    console.log(new Divisao(n1, n2).getResultado());
        
})();