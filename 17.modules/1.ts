import { Pessoa, PessoaFisica, PessoaJuridica } from './pessoa'
import { Profissional } from './profissional'

const pessoa = new Pessoa('Marcos', 'Souza')
console.log(pessoa.getNomeCompleto());

const pessoaFisica = new PessoaFisica('João', 'Silva', '12345678');
console.log(pessoaFisica.getNomeCompleto());
console.log(pessoaFisica.cpf);

const pessoaJuridica = new PessoaJuridica('João', 'Souza', 'Empresa LTDA.', '0000000000');
console.log(pessoaJuridica.getNomeCompleto());
console.log(pessoaJuridica.nomeFantasia);
console.log(pessoaJuridica.cnpj);
 
const profissional = new Profissional('Marcelo', 'dos Santos', '22334455', 'Desenvolvedor');
console.log(profissional.getNomeCompleto(), ' - ', profissional.getProfissao());