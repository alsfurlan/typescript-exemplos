export class Pessoa {

    constructor(
        public nome: string, 
        public sobrenome: string
    ) { }

    getNomeCompleto() : string {
        return `${this.nome} ${this.sobrenome}`
    }
}

export class PessoaFisica extends Pessoa {
    constructor(
        nome: string,
        sobrenome: string,
        public cpf: string
    ) {
        super(nome, sobrenome);
    }
}

export class PessoaJuridica extends Pessoa{
    constructor(
        nome: string,
        sobrenome: string,
        public nomeFantasia: string,
        public cnpj: string 
    ) {
        super(nome, sobrenome);
    }
}