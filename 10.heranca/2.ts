(function() {

    class Pessoa {
        
        nome: string;
        sobrenome: string;

        getNomeCompleto():string {
            return `${this.nome} ${this.sobrenome}`;
        }
    }

    class Programador extends Pessoa {

    }

    let programador = new Programador();
    programador.nome = 'Ada';
    programador.sobrenome = 'Lovelace'
    console.log(programador.getNomeCompleto());
    
})();