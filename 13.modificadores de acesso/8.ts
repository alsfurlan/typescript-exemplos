(function() {
    
    class Pessoa {
        
        constructor(
            private nome: string,
            private idade: number 
        ) { }

        // Acessa por herança
        protected getNome() {
            return this.nome;
        }

        // Apenas dentro da classe
        private getIdade() {
            return this.idade;
        }

        // Público em qualquer lugar
        getNomeIdade() {
            return `${this.nome} - ${this.idade} ano(s)`;
        }
    }

    class PessoaFisica extends Pessoa {
    
        constructor(
            nome: string,
            idade: number,
            private cpf: string
        ) {
            super(nome, idade);
        }

        getNomeCpf() {
            return `${this.getNome()} - CPF: ${this.cpf}`;
        }
    }

    const p = new Pessoa('João', 35);
    console.log(p.getNomeIdade());
    // p.getIdade();
    // p.getNome();

    const pf = new PessoaFisica('Maria', 20, '123456789');
    console.log(pf.getNomeIdade());
    console.log(pf.getNomeCpf());
})();