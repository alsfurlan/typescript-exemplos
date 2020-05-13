(function() {
    class Pessoa {
        nome: string;
        sobrenome: string;
    }

    let pessoa: Pessoa;
    
    pessoa = new Pessoa();

    pessoa.nome = 'Anderson';
    pessoa.sobrenome = 'Furlan';

    console.log(pessoa);
})();
