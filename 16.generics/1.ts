(function() {

    const echo = (valor : any) : any => valor;

    let resultado = echo(1);
    console.log(resultado);
    
    resultado = echo('a');
    console.log(resultado);
    
})();