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
    console.log(programador.getNomeCompleto());

})();