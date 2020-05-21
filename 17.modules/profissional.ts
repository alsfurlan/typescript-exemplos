// package nome.do.pacote.NomeClasse;
// package nome.do.pacote.*;
import { PessoaFisica } from './pessoa';
// import { PessoaFisica, Pessoa, PessoaJuridica } from './pessoa';

export class Profissional extends PessoaFisica {

    constructor(
        nome: string, 
        sobrenome: string, 
        cpf: string,
        public profissao: string
    ) {
        super(nome, sobrenome, cpf);
    }

    getProfissao() {
        return this.profissao;
    }
}