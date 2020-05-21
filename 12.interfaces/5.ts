(function() {

    interface Pessoa {
        nome: string,
        sobrenome: string
        getNomeCompleto() : string
    }
    
    interface Profissional {
        profissao: string
        getProfissao(): string
    }

    class Programador implements Pessoa, Profissional {
        nome: string;
        sobrenome: string;
        profissao: string;
        
        constructor() {
            this.profissao = 'Programador(a)';
        }

        getNomeCompleto(): string {
            return `${this.nome} ${this.sobrenome}`;
        }
        
        getProfissao(): string {
            return `Profissão: ${this.profissao}`;
        }
    }

    let p = new Programador();
    p.nome = 'Alan';
    p.sobrenome = 'Turing';
    
    console.log(p.getNomeCompleto(), ' - ', p.getProfissao());
    

})();