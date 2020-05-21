(function() {

    class Pessoa {
        
        constructor(
            protected nome: string,
            protected sobrenome: string) {
        }
        getNomeCompleto(): string {
            return `${this.nome} ${this.sobrenome}`
        }
    }

    let p: Pessoa = new Pessoa('Augusto', 'dos Santos');
    // console.log(p.nome);
    // console.log(p.sobrenome);
    console.log(p.getNomeCompleto());
    
    
    

})();