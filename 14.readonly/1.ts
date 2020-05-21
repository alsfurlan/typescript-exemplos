(function() {

    class Pessoa {
        constructor(
            private nome: string, 
            private sobrenome: string
        ) { }

        getNome(): string {
            return this.nome;
        }

        getSobrenome(): string {
            return this.sobrenome;
        }
    }

    class Desenvolvedor extends Pessoa {

        readonly profissao: string = 'Desenvolvedor';
        
        constructor(nome: string, sobrenome: string) {
            super(nome, sobrenome);
        }
    }

    let desenvolvedor = new Desenvolvedor('James', 'Goslin');
    // desenvolvedor.nome = 'Dennis';
    // desenvolvedor.sobrenome = 'Ritchie';
    // desenvolvedor.profissao = 'Programador';
    console.log(desenvolvedor.profissao);

})();
