(function() {

    class Pessoa {        
        nome: string;
        sobrenome: string;

        constructor(nome = '', sobrenome = '') {
            this.nome = nome;
            this.sobrenome = sobrenome;
        }

        getNomeCompleto():string {
            return `${this.nome} ${this.sobrenome}`;
        }
    }

    class Programador extends Pessoa {

        getProfissao() {
            return 'Programador';
        }
    }

    let pessoa = new Pessoa('Machado', 'de Assis');
    console.log(pessoa.getNomeCompleto());
    // console.log(pessoa.getProfissao());
    
    let programador = new Programador('Rodrigo', 'Branas');
    console.log(programador.getNomeCompleto());
    console.log(programador.getProfissao());
    
})();