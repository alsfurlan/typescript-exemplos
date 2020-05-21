(function() {

    class Pessoa {

        constructor(
            public nome: string, 
            public sobrenome: string
        ) {
        }

        getNomeCompleto(): string {
            return `${this.nome} ${this.sobrenome}`
        }
    }

    let pessoa : Pessoa = new Pessoa('Augusto', 'dos Santos');
    console.log(pessoa.nome);
    console.log(pessoa.sobrenome);
    console.log(pessoa.getNomeCompleto());
    
})();