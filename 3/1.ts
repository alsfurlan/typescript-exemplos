(function() {

    // JavaScript 
    function adicionar(a, b) {
        return a + b;
    }

    let resultado = adicionar(2, 3);
    console.log(resultado);

    resultado = adicionar("a", 3);
    console.log(resultado);

    // TypeScript
    function soma(a:number, b: number) {
        return a + b;     
    }

    resultado = soma(2, 3);
    console.log(resultado);

    // resultado = soma("a", 3);
    console.log(resultado);

})();