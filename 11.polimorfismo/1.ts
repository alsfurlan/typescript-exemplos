(function() {

    class Pessoa {
        
        nome: string;
        sobrenome: string;

        getNomeCompleto(): string {
            return `${this.nome} ${this.sobrenome}`;
        }
    }

    class Programador extends Pessoa {

        getNomeCompleto() : string {
            return `${super.getNomeCompleto()} - Programador(a)`;
        }
    }

    let pessoa = new Pessoa();
    pessoa.nome = 'Ada';
    pessoa.sobrenome = 'Lovelace';
    console.log(pessoa.getNomeCompleto());    

    let programador = new Programador();
    programador.nome = 'Ada';
    programador.sobrenome = 'Lovelace';    
    console.log(programador.getNomeCompleto());
    
})();