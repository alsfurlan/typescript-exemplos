(function() {
    class Pessoa {
        nome: string;
        sobrenome: string;
        
        // getNomeCompleto() => { ...
        getNomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }

        getNome():string {
            return this.nome;
        }

        setNome(nome: string):void {
            this.nome = nome;
        }

        getSobrenome() {
            return this.sobrenome;
        }

        setSobrenome(sobrenome:string) {
            this.sobrenome = sobrenome;
        }
    }

    let pessoa = new Pessoa();

    pessoa.nome = 'Anderson';
    pessoa.sobrenome = 'Furlan';

    console.log(pessoa);

    console.log(pessoa.getNomeCompleto());    
})();
