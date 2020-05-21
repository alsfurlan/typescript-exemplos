(function() {

    class Pessoa {
        nome: string;
        sobrenome: string;
        
        // public Pessoa() {... - Java
        constructor() {
            this.nome = '';
            this.sobrenome = '';
        }

        // constructor(nome: string, sobrenome: string) {
        //     this.nome = nome;
        //     this.sobrenome = sobrenome;
        // }
    }

    let pessoa = new Pessoa();

    pessoa.nome = 'Anderson';
    pessoa.sobrenome = 'Furlan';

    console.log(pessoa);
})();
