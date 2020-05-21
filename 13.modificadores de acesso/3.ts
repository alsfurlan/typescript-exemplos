(function() {

    class Pessoa {
    
        // private nome: string;
        // private sobrenome: string;

        // constructor(nome: string, sobrenome: string) {
        //     this.nome = nome;
        //     this.sobrenome = sobrenome;
        // }
        constructor(
            private nome: string, 
            private sobrenome: string
        ) { }

        getNome(): string {
            return this.nome;
        }

        setNome(nome:string) {
            this.nome = nome;
        }

        getSobrenome(): string {
            return this.sobrenome;
        }

        setSobrenome(sobrenome:string) {
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
    console.log(pessoa.getNome());
    console.log(pessoa.getSobrenome());
    
    pessoa.setNome('Luiz');
    pessoa.setSobrenome('de Oliveira');

    console.log(pessoa.getNome());
    console.log(pessoa.getSobrenome());
    console.log(pessoa.getNomeCompleto());
})();