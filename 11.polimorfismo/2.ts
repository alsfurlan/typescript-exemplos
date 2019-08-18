(function() {

    class Pessoa {
        
        nome: string;
        sobrenome: string;

        constructor(nome:string, sobrenome:string) {
            this.nome = nome;
            this.sobrenome = sobrenome;
        }

        getNomeCompleto(): string {
            return `${this.nome} ${this.sobrenome}`;
        }
    }

    class Programador extends Pessoa {

        getNomeCompleto() : string {
            return `${super.getNomeCompleto()} - Programador(a)`;
        }

    }

    let programador = new Programador('Ada', 'Lovelace');    
    console.log(programador.getNomeCompleto());
    
})();