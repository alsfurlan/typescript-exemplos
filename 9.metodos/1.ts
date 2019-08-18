(function() {
    class Pessoa {
        nome: string;
        sobrenome: string;
        
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
