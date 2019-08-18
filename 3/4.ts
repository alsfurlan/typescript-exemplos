(function() {

    function sub(a: number, b?:number, c?:number):number {
        let res = a;
        if(b !== undefined) {
            res -= b;
            if(c !== undefined) {
                res -= c;
            }
        }
        return res;
    }

    console.log(sub(1));
    console.log(sub(1,2));
    console.log(sub(1,2,3));
})();