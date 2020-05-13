(function() {

    function soma(a: number | string, b: string | number): string | number {
        if (typeof a === 'number' && typeof b === 'number') {
            return (a + b);
        } 
        // else {
        //     return `${a}${b}`;
        // }
        if (typeof a === 'string' && typeof b === 'string') {
            return (a + b);
        } 
    }

    console.log(soma(3, 4));
    console.log(soma('1', 'a'));
    
})();
