(function() {

    const echo = (valor : any) : any => valor;

    let resultado: string = echo(1);
    console.log(resultado);
    
    let resultado2: number = echo('a');
    console.log(resultado2);
    
})();