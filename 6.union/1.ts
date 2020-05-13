(function() {
    
    let a: string | null;
    console.log(a);
    
    a = 'texto';
    console.log(a);
    
    a = null;
    console.log(a);

    let b: number | boolean;
    
    b = 5;
    console.log(b);
    
    b = true;
    console.log(b);    

    let c: string | object;
    c = 'teste';
    console.log(c);
    
    c = { nome: 'João', idade: 30 };
    console.log(c);   

    // c = 1;
    // c = true;
    
})();