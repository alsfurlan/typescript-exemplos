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

        constructor(nome: string, sobrenome: string, profissao?: string) {
            super(nome, sobrenome);
            this.profissao = profissao;
        }

        getNomeCompleto() : string {
            return `${super.getNomeCompleto()} - ${this.profissao}`;
        }

    }

    let profissional = new Profissional('Ada', 'Lovelace');    
    console.log(profissional.getNomeCompleto());
    
})();