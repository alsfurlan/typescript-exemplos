export class Pessoa {

    constructor(public nome: string, public sobrenome: string) {

    }

    getNomeCompleto() : string {
        return `${this.nome} ${this.sobrenome}`
    }
}