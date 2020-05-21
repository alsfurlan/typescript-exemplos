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

    class Profissional extends Pessoa {
        profissao: string;

        constructor(nome: string, sobrenome: string, profissao: string = '') {
            super(nome, sobrenome);
            this.profissao = profissao;
        }

        getNomeCompleto() : string {
            return super.getNomeCompleto() + (this.profissao === '' ? '' : ` - ${this.profissao}`);
        }

        getProfissao(): string {
            return `Profissão: ${this.profissao}`;
        }

    }

    let p1: Pessoa = new Profissional('Ada', 'Lovelace');    
    console.log(p1.getNomeCompleto());
    // console.log(p1.getProfissao());
    
    let p2: Pessoa = new Profissional('Alan', 'Turing', 'Cientista da Computação');
    console.log(p2.getNomeCompleto());

    let p3: Profissional = new Profissional('Charles', 'Babbage');
    console.log(p3.getNomeCompleto());
    console.log(p3.getProfissao());    
    
})();