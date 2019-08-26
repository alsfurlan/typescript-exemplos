import { Pessoa } from './pessoa'

export  class Profissional extends Pessoa {

    constructor(nome: string, sobrenome: string, public profissao: string) {
        super(nome, sobrenome);
    }

    getProfissao() {
        return this.profissao;
    }
}