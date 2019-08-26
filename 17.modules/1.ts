import { Pessoa } from './pessoa'
import { Profissional } from './profissional'

let pessoa = new Pessoa('Marcos', 'Souza')
console.log(pessoa.getNomeCompleto());

let profissional = new Profissional('Marcelo', 'dos Santos', 'Desenvolvedor');
console.log(profissional.getNomeCompleto(), ' - ', profissional.getProfissao());