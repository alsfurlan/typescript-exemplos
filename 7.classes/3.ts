(function() {
    class Pessoa {
        nome = '';
        sobrenome = '';
    }

    let pessoa: Pessoa | number = new Pessoa();

    pessoa.nome = 'Anderson';
    pessoa.sobrenome = 'Furlan';

    // pessoa.nome = 1;
    // pessoa.sobrenome = true;

    // pessoa = {};
    pessoa = 1;
    // pessoa = true;
    // pessoa = [];

    console.log(pessoa);
})();
