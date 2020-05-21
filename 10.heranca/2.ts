(function () {

    class Pessoa {
        nome: string;
        sobrenome: string;

        constructor(nome: string, sobrenome: string) {
            this.nome = nome;
            this.sobrenome = sobrenome;
        }

        getNomeCompleto(): string {
            return `${this.nome} ${this.sobrenome}`;
        }
    }

    enum NivelProgramador {
        JUNIOR = 'Júnior',
        PLENO = 'Pleno',
        SENIOR = 'Senior',
    };

    class Programador extends Pessoa {

        nivel: NivelProgramador;

        // constructor(nome: string, sobrenome: string, nivel?:NivelProgramador) {
        constructor(nome: string, sobrenome: string, nivel = NivelProgramador.JUNIOR) {
            super(nome, sobrenome);
            this.nivel = nivel;
        }

        getProfissao() {
            return `Programador ${this.nivel}`;
        }
    }

    let pessoa = new Pessoa('Machado', 'de Assis');
    console.log(pessoa.getNomeCompleto());
    // console.log(pessoa.getProfissao());

    let programador = new Programador('Rodrigo', 'Branas');
    console.log(programador.getNomeCompleto(), ' - ', programador.getProfissao());

    let programador2 = new Programador('Loiane', 'Groner', NivelProgramador.SENIOR);
    console.log(programador2.getNomeCompleto(), ' - ' , programador2.getProfissao());

})();