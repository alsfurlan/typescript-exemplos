(function() {

    class Pessoa {
        
        constructor(protected nome : string, protected sobrenome : string) {

        }
        
        getNomeCompleto(): string {
            return `${this.nome} ${this.sobrenome}`
        }
    }

    class Profissional extends Pessoa {
        
        constructor(nome:string, sobrenome: string, private profissao : string) {
            super(nome, sobrenome);
        }

        getNomeCompleto() : string {
            // return `${super.getNomeCompleto()} - Profissão: ${this.profissao}`;
             return `${this.nome} ${this.sobrenome} - Profissão: ${this.profissao}`;
        }


    }


    let p: Pessoa = new Profissional('Augusto', 'dos Santos', 'Desenvolvedor de Software');
    // console.log(p.nome);
    // console.log(p.sobrenome);
    console.log(p.getNomeCompleto());
    // console.log(p.profissao);
    
    
    
})();