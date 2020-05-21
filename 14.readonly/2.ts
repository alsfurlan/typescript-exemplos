(function() {

    class Pessoa {
        constructor(
            private nome: string, 
            private sobrenome: string
        ) {
        }

        getNome(): string {
            return this.nome;
        }

        getSobrenome(): string {
            return this.sobrenome;
        }
    }

    class Profissional extends Pessoa {

        constructor(
            nome: string, 
            sobrenome: string, 
            readonly profissao: string = 'Autônomo'
        ) {
            super(nome, sobrenome);
        }
    }

    const motorista = new Profissional('Antônio', 'Alves', 'Motorista');
    console.log(motorista.profissao);
    // motorista.profissao = 'Caminhoneiro';

    const autonomo = new Profissional('Dennis', 'Retchie');
    console.log(autonomo.profissao);
    
})();
