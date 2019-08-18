(function() {

    class Pessoa {
        nome: string;
        sobrenome: string;
        
        constructor(nome:string='', sobrenome:string='') {
            this.nome = nome;
            this.sobrenome = sobrenome;
        }
        
        getNomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    }

    let pessoa1 = new Pessoa('João', 'da Silva');
    console.log(pessoa1.getNomeCompleto());    

    let pessoa2 = new Pessoa();
    console.log(pessoa2.getNomeCompleto());    

})();
