(function() {

    class Pessoa {
        constructor(private nome: string, private sobrenome: string) {

        }

        getNome(): string {
            return this.nome;
        }

        getSobrenome(): string {
            return this.sobrenome;
        }
    }

    class Profissional extends Pessoa {

        constructor(nome: string, sobrenome: string, readonly profissao: string) {
            super(nome, sobrenome);
        }
    }

    class Desenvolvedor extends Profissional {

        constructor(nome: string, sobrenome: string) {
            super(nome, sobrenome, 'Desenvolvedor');
        }
    }

    let desenvolvedor = new Desenvolvedor('James', 'Goslin');
    // desenvolvedor.nome = 'Dennis'
    // desenvolvedor.sobrenome = 'Ritchie'
    // desenvolvedor.profissao = 'Programador';
    console.log(desenvolvedor.profissao);

    let motorista = new Profissional('Antônio', 'Alves', 'Motorista');
    console.log(motorista.profissao);
    // motorista.profissao = 'Caminhoneiro';
})();
