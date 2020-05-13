(function() {

    function sub(a: number, b?:number, c?:number):number {
        let resultado = a;
        if(b !== undefined) {
            resultado -= b;
            if(c !== undefined) {
                resultado -= c;
            }
        }
        return resultado;
    }

    console.log(sub(1));
    console.log(sub(1,2));
    console.log(sub(1,2,3));
})();