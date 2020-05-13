(function() {

    const helloWorld = () => 'Hello World!';

    let mensagem:any = helloWorld();
    console.log(mensagem);
    
    mensagem = 1;
    console.log(mensagem);

    mensagem = true;
    console.log(mensagem);

    mensagem = {};
    console.log(mensagem);

    mensagem = [];
    console.log(mensagem);
})();