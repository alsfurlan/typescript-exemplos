(function() {

    interface Pessoa {
        nome: string,
        sobrenome: string
        getNomeCompleto() : string
    }

    interface Profissional {
        profissao: string
        getProfissao(): string
    }

    class Motorista implements Pessoa, Profissional {
        
        nome: string;        
        sobrenome: string;
        profissao: string;

        constructor(nome: string, sobrenome: string) {
            this.nome = nome;
            this.sobrenome = sobrenome;
            this.profissao = 'Motorista';
        }

        getNomeCompleto(): string {
            return `${this.nome} ${this.sobrenome}`;
        }
        
        getProfissao(): string {
            return `Profissão: ${this.profissao}`
        }

    }

    let motorista1 = new Motorista('Jośe', 'Costa');
    console.log(motorista1.getNomeCompleto(), ' - ', motorista1.getProfissao());   

    let motorista2: Pessoa = new Motorista('Francisco', 'de Souza');
    // console.log(motorista2.getNomeCompleto(), ' - ', motorista2.getProfissao());   

    let motorista3: Profissional = new Motorista('Augusto', 'Godoy');
    // console.log(motorista3.getNomeCompleto(), ' - ', motorista3.getProfissao());   

})();