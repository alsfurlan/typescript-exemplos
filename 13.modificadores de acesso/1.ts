(function() {

    class Pessoa {
        // private string nome; - Java
        private nome: string;
        private sobrenome: string;

        constructor(nome: string, sobrenome: string) {
            this.nome = nome;
            this.sobrenome = sobrenome;
        }

        getNomeCompleto(): string {
            return `${this.nome} ${this.sobrenome}`
        }
    }

    let pessoa : Pessoa = new Pessoa('Augusto', 'dos Santos');
    // console.log(pessoa.nome);
    // console.log(pessoa.sobrenome);
    console.log(pessoa.getNomeCompleto());

})();