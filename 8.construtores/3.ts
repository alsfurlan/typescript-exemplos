(function () {

    class Pessoa {
        nome: string;
        sobrenome: string;

        constructor(nome: string, sobrenome: string) {
            this.nome = nome;
            this.sobrenome = sobrenome;
        }
    }

    let pessoa1 = new Pessoa('João', 'da Silva');
    console.log(pessoa1);

    // let pessoa2 = new Pessoa('João');
    // console.log(pessoa2);

    // let pessoa3 = new Pessoa();
    // console.log(pessoa3);
})();
