(function() {

    class Pessoa {
        nome: string;
        sobrenome: string;
        
        constructor() {
            this.nome = '';
            this.sobrenome = '';
        }

        // constructor(nome: string, sobrenome: string) {
        //     this.nome = nome;
        //     this.sobrenome = sobrenome;
        // }
        
        getNomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    }

    let pessoa : Pessoa;
    
    pessoa = new Pessoa();

    pessoa.nome = 'Anderson';
    pessoa.sobrenome = 'Furlan';

    console.log(pessoa);

    console.log(pessoa.getNomeCompleto());    

})();
